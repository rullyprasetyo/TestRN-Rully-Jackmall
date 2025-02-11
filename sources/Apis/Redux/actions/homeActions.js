import { ENDPOINTS } from "../../Endpoints";
import { GET_REQ } from "../../Network";
import { setCategory, setJokes } from "../reducers";
import { ToastMessage } from "../../../Components";

export const getCategories = () => dispatch => {
    const endpoint = ENDPOINTS.categories
    return new Promise((resolve, reject) => {
        GET_REQ(endpoint).then(response => {
            resolve(dispatch(setCategory(response.data.categories)));
        }).catch(error => {
            reject(error)
        })
    })
}

export const getJokes = (props) => dispatch => {
    const queryString = new URLSearchParams(props).toString()
    const endpoint = ENDPOINTS.jokes + queryString
    return new Promise((resolve, reject) => {
        GET_REQ(endpoint).then(response => {
            resolve(dispatch(setJokes(response.data.jokes)));
            if (response.data.jokes.length > 2) {
                ToastMessage({ type: 'success', textTitle: 'Success', textMessage: 'Jokes successfully added' })
            }
        }).catch(error => {
            reject(error)
        })
    })
}