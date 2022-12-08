import axios from "axios";
import qs from "qs";

const data={   
    'scopes':'PublicApi.Access',
    'grant_type':'client_credentials',
    'client_id':'db49cfe7-d687-4784-9b88-c1622e389455',
    'client_secret':'07DCC9C5BFCF4E6B331219F48F6D87D28A3D285D'
}
const axiosValue={
    method:'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data:qs.stringify(data),
    url:"https://id.kiotviet.vn/connect/token"
}
export default axios(axiosValue)