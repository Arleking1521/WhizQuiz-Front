import axios from "axios";

export default class GamesService{
    static async getAll() {
        try{
            const response = await  axios.get("https://646f4f0f09ff19b12086fec8.mockapi.io/quizapi/quiz")
            return response.data
        } catch (e) {
            console.log("Error")
        }

    }
}