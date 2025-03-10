import IReport from "../../interfaces/IReport";
import IReportBaseRepo from "../../interfaces/IReportBaseRepo";
import { Report } from "../../model/reportModel";
import { convertIReportDbToIReport, convertIReportToIReportDb, convertToObjectId } from "../../util/converter";
import handleError from "../../util/handleError";

class ReportBaseRepo implements IReportBaseRepo {

}

export default ReportBaseRepo