import axios from "axios";

export default class CommentsService {
    static async getAll() {
        const response = await axios.get("https://646f4f0f09ff19b12086fec8.mockapi.io/quizapi/comments")
        return response.data
    }
}