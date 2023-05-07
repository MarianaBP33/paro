import axios from "axios";

const paroApi = axios.create({
    baseURL: "http://localhost:3001/api/v1/paro"
})

export default paroApi