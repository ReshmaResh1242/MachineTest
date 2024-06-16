import axios from "axios";

const baseURL = "https://movies-api14.p.rapidapi.com";
const API_KEY = 'f9870f1d4bmshb64a6a9d77b3415p1ee2f3jsn5ec9b18255f6';

export const api = {

    // ---------------- Get Movie List Api -----------------
    getMovieList: () => {
        return axios.get(`${baseURL}/movies`, {
            headers: {
                "Content-Type": "application/json",
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
            },
        });
    },

};