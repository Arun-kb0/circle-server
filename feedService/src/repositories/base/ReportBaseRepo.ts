import { FilterQuery } from "mongoose";
import IReport from "../../interfaces/IReport";
import IReportBaseRepo from "../../interfaces/IReportBaseRepo";
import { IReportDb, Report } from "../../model/reportModel";
import { convertIReportDbToIReport, convertIReportToIReportDb, convertToObjectId } from "../../util/converter";
import handleError from "../../util/handleError";

class ReportBaseRepo implements IReportBaseRepo {

  async filteredReportByDateAndTextCount(searchText: string, startDate?: string, endDate?: string): Promise<number> {
    try {
      let query: FilterQuery<IReportDb> = {}
      if (searchText.trim() !== '') {
        query.$or = [
          { contentType: { $regex: searchText, $options: 'i' } },
          { description: { $regex: searchText, $options: 'i' } }
        ]
      }
      if (startDate || endDate) {
        query.createdAt = {} as Record<string, Date>;
        if (startDate) {
          query.createdAt.$gte = startDate
        }
        if (endDate) {
          query.createdAt.$lte = endDate
        }
      }
      const count =await Report.countDocuments(query)
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async filteredReportByDateAndText(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IReport[]> {
    try {
      let query: FilterQuery<IReportDb> = {}
      if (searchText.trim() !== '') {
        query.$or = [
          { contentType: { $regex: searchText, $options: 'i' } },
          { description: { $regex: searchText, $options: 'i' } }
        ]
      }
      if (startDate || endDate) {
        query.createdAt = {} as Record<string, Date>;
        if (startDate) {
          query.createdAt.$gte = startDate
        }
        if (endDate) {
          query.createdAt.$lte = endDate
        }
      }
      console.log(query)
      const reports = await Report.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      console.log('reports length', reports.length)
      const convertedPosts = reports.map(item => convertIReportDbToIReport(item))
      return convertedPosts
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }

  }

}

export default ReportBaseRepo