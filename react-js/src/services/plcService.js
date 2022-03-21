import axios from "axios";

export default class PlcService{
    getPlc(){
        return axios.get("https://localhost:44303/api/values/5")
    }
} 