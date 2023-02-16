import axios, { AxiosResponse} from "axios";


axios.defaults.baseURL='https://localhost:7022/api/';

const responseBody=(Response:AxiosResponse)=>Response.data;


const requests={
    get:(url:string)=>axios.get(url).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    post:(url:string,body:{})=>axios.post(url,body).then(responseBody),
    delete:(url:string)=>axios.delete(url).then(responseBody),
    postonlyurl:(url:string)=>axios.post(url).then(responseBody)
}
const Users={
    SignUp:(body:{})=>requests.post('Users',body),
    Login:(email:string,password:string)=>requests.postonlyurl(`Users/Login?Email=${email}&password=${password}`),
    SentOTP:(id:number)=>requests.postonlyurl(`Users/SendOtptoMail/${id}`),
    VerifyOtp:(id:number,otp:string)=>requests.postonlyurl(`Users/VerifyOTP?id=${id}&otp=${otp}`)
}
 const agents={
     Users
 }

export default agents