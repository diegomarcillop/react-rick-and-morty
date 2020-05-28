import Axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

class Api {
    get(url, page) {
        url = `${apiURL}/${url}/?page=${page}`;
        console.log(url);
         return Axios.get(url)
         .then(async (res) => {
               return await res.data;
         }).catch(err => err)

    }
}
export default new Api();