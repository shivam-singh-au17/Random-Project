import axios from 'axios'

export default function FetchUser(query, page) {
    if (!query) {
        return Promise.reject("query should be provided")
    }
    return axios.get("https://api.github.com/search/users", {
        parmas: {
            q:query
        }
    })
}
