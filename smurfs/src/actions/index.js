import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_COMPLETE = "FETCH_COMPLETE";
export const SET_ERROR = "SET_ERROR";
export const ADD_BEGIN = "ADD_BEGIN";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_BEGIN = "REMOVE_BEGIN";
export const REMOVE_SMURF = "REMOVE_SMURF";
export const REMOVE_ERROR = "REMOVE_ERROR";


export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({type: FETCH_COMPLETE, payload: res.data})
    })
    .catch(err => {
        console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    })
}

export const addSmurf = smurf => dispatch => {
    dispatch({type: ADD_BEGIN});
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log(res);
        dispatch({type: ADD_SMURF, payload: res.data})
    })
    .catch(err => {
        console.error("error fetching data from api, err: ", err);
      dispatch({ type: ADD_ERROR, payload: "Error fetching data from api" });
    })
}

export const removeSmurf = smurf => dispatch => {
    dispatch({type: REMOVE_BEGIN});
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log(res);
        dispatch({type: REMOVE_SMURF, payload: res.data})
    })
    .catch(err => {
        console.error("error fetching data from api, err: ", err);
      dispatch({ type: REMOVE_ERROR, payload: "Error fetching data from api" });
    })

}