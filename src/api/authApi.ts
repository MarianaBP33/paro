import axios from "axios";

const authApi = axios.create({
    baseURL: "http://localhost:3001/api/v1/auth"
})

export default authApi