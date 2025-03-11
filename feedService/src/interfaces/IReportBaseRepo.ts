import IReport from './IReport'

interface IReportBaseRepo {
  // findSavedReportsByUserId(userId: string, limit: number, startIndex: number): Promise<IReport[]>
  // findSavedReportsByUserId(userId: string, limit: number, startIndex: number): Promise<IReport[]>
  filteredReportByDateAndTextCount(searchText: string, startDate?: string, endDate?: string): Promise<number>
  filteredReportByDateAndText(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<IReport[]>
}

export default IReportBaseRepo