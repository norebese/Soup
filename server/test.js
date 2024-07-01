import axios from "axios";
// import { config } from "./config/config";

const base_url = 'http://api.odcloud.kr/api/nts-businessman/v1/'
const SERVICE = "status"
const TYPE = "?returnType=JSON"
const APIKEY = "&serviceKey=" + "VIeQdwIeVSbJ6d2GYlamuT8LPiXfcBQs4VmNuRGMZ4OctmPHRcXSxU7cAHVz3SOoHPApWfV8YQExCVywvdYXQQ%3D%3D"
const num = '0000000000'

try {
    const response = await axios.post(`${base_url}${SERVICE}${TYPE}${APIKEY}`, {
        b_no: [num]
    });
    if (response.data.status_code === 'OK' && response.data.data.length > 0) {
        const businessData = response.data.data[0];
        console.log("Business Data:", businessData);
        // 개별 필드 접근
        console.log("Business Number:", businessData.b_no);
        console.log("Tax Type:", businessData.tax_type);
        // 필요에 따라 다른 필드들도 접근 가능
    } else {
        console.error("Invalid response data");
    }
    // console.log(response.data.data.length)
    // console.log(response.data.data[0].tax_type)
} catch (error) {
    console.error("Error fetching data:", error);
    throw error;
}


// {
//     request_cnt: 1,
//     status_code: 'OK',
//     data: [
//       {
//         b_no: '0000000000',
//         b_stt: '',
//         b_stt_cd: '',
//         tax_type: '국세청에 등록되지 않은 사업자등록번호입니다.',
//         tax_type_cd: '',
//         end_dt: '',
//         utcc_yn: '',
//         tax_type_change_dt: '',
//         invoice_apply_dt: '',
//         rbf_tax_type: '',
//         rbf_tax_type_cd: ''
//       }
//     ]
//   }
// 과세유형메세지(명칭):
// 01:부가가치세 일반과세자,
// 02:부가가치세 간이과세자,
// 03:부가가치세 과세특례자,
// 04:부가가치세 면세사업자,
// 05:수익사업을 영위하지 않는 비영리법인이거나 고유번호가 부여된 단체,국가기관 등,
// 06:고유번호가 부여된 단체,
// 07:부가가치세 간이과세자(세금계산서 발급사업자),
// * 등록되지 않았거나 삭제된 경우: 
// 07:국세청에 등록되지 않은 사업자등록번호입니다