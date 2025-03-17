import IReport from './IReport'

interface IReportBaseRepo {
  findByUserIdAndContentId(userId: string, contentId: string, contentType: IReport['contentType']): Promise<IReport | null> 
  isReportExits(userId: string, contentId: string, contentType: IReport['contentType']): Promise<boolean>
  createReport(reportData: Partial<IReport>): Promise<IReport>
  deleteByContentIdAndType(contentId: string, contentType: IReport['contentType']): Promise<IReport | null>
}

export default IReportBaseRepo