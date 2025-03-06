import { NextFunction, Request, Response } from "express";
import crypto, { randomUUID } from 'crypto'
import axios from "axios";
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import { OrderType } from "../constants/types";

const MERCHANT_ID = process.env.PP_MERCHANT_ID || ""
const MERCHANT_KEY = process.env.PP_MERCHANT_KEY || ""
const REDIRECT_URL = process.env.PP_REDIRECT_URL || ""
const MERCHANT_BASE_URL = process.env.PP_MERCHANT_BASE_URL || ""
const MERCHANT_STATUS_URL = process.env.PP_MERCHANT_STATUS_URL || ""
const SUCCESS_URL = process.env.PP_SUCCESS_URL || ""
const FAILURE_URL = process.env.PP_FAILURE_URL || ""


export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('get phone pay create order')

    const { amount, subscriberUserId, subscriberName, subscriberEmail, orderType, subscriberToUserId, subscriberToUserName } = req.body
    console.log(req.body)
    // ! enter data to database and return orderId
    // ! add orderType and user details in order collection
    const order: Partial<OrderType> = {
      userId: subscriberUserId,
      amount: amount,
      orderType: "user_subscription",
      state: "pending",
    }
    const data = {
       subscriberUserId

    }

    const orderId = randomUUID()

    // * payment
    const paymentPayload = {
      merchantId: MERCHANT_ID,
      merchantUserId: subscriberUserId,
      email: subscriberEmail,
      // mobileNumber: ,
      amount: amount * 100,
      merchantTransactionId: orderId,
      redirectUrl: `${REDIRECT_URL}/?id=${orderId}`,
      redirectMode: 'POST',
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    }

    const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')
    const keyIndex = 1
    const string = payload + '/pg/v1/pay' + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    const option = {
      method: 'POST',
      url: MERCHANT_BASE_URL,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: {
        request: payload
      }
    }

    const response = await axios.request(option)
    const responseUrl = response.data.data.instrumentResponse.redirectInfo.url
    console.log(response.data)
    console.log(responseUrl)
    res.status(httpStatus.OK).json({ message: 'create order success', url: responseUrl })
  } catch (error) {
    next(error)
  }
}

export const getStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('get phone pay status')
    const merchantTransactionId = req.query.id;

    const keyIndex = 1
    const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    const option = {
      method: 'GET',
      url: `${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': MERCHANT_ID
      },
    }

    axios.request(option).then((response) => {
      if (response.data.success === true) {
        return res.redirect(SUCCESS_URL)
      } else {
        return res.redirect(FAILURE_URL)
      }
    })
  } catch (error) {
    next(error)
  }
}

