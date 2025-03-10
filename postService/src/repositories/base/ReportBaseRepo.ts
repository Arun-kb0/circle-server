import IReport from "../../interfaces/IReport";
import IReportBaseRepo from "../../interfaces/IReportBaseRepo";
import { Report } from "../../model/reportModel";
import { convertIReportDbToIReport, convertIReportToIReportDb, convertToObjectId } from "../../util/converter";
import handleError from "../../util/handleError";

class ReportBaseRepo implements IReportBaseRepo {

  async findByUserIdAndContentId(userId: string, contentId: string, contentType: IReport['contentType']): Promise<IReport | null> {
    try {
      const contentObjId = convertToObjectId(contentId)
      const userObjId = convertToObjectId(userId)
      const reportData = await Report.findOne({
        userId: userObjId,
        contentId: contentObjId,
        contentType
      })
      return reportData ? convertIReportDbToIReport(reportData) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async isReportExits(userId: string, contentId: string, contentType: IReport['contentType']): Promise<boolean> {
    try {
      const contentObjId = convertToObjectId(contentId)
      const userObjId = convertToObjectId(userId)
      const isExits = await Report.exists({
        userId: userObjId,
        contentId: contentObjId,
        contentType
      })
      return isExits ? true : false
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createReport(reportData: Partial<IReport>): Promise<IReport> {
    try {
      const convertedData = convertIReportToIReportDb(reportData)
      const newReportData = await Report.create(convertedData)
      return convertIReportDbToIReport(newReportData)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteByContentIdAndType(contentId: string, contentType: IReport["contentType"]): Promise<IReport | null> {
    try {
      const contentObjId = convertToObjectId(contentId)
      const deletedData = await Report.findOneAndDelete({
        contentId: contentObjId,
        contentType
      }, { new: true }).exec()
      return deletedData ? convertIReportDbToIReport(deletedData) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default ReportBaseRepo