import { FETCH_DATA, FETCH_COMPLETE, SET_ERROR, ADD_BEGIN, ADD_SMURF, ADD_ERROR, REMOVE_BEGIN, REMOVE_SMURF, REMOVE_ERROR } from "../actions";

const initialState = {
    village: [],
    isFetchingData: false,
    error: ""
  };

const reducer = (state=initialState, action) => {
    switch(action.type){
      case FETCH_DATA:
        return{
            ...state,
            isFetchingData: true,
            village: []
        }
      case FETCH_COMPLETE:
      return{
          ...state,
            isFetchingData: false,
            village: action.payload

        }
      case SET_ERROR: 
      return {
      ...state,
      isFetchingData: false,
      error: action.payload
        }
        case ADD_BEGIN:
        return{
            ...state,
            isFetchingData: true,
            village: []
        }
        case ADD_SMURF:
      return{
          ...state,
            isFetchingData: false,
            village: action.payload

        }
        case ADD_ERROR: 
      return {
          ...state,
          isFetchingData: false,
          error: action.payload
        }
        case REMOVE_BEGIN:
          return{
              ...state,
              isFetchingData: true,
              village: []
          }
          case REMOVE_SMURF:
        return{
            ...state,
              isFetchingData: false,
              village: state.village.filter(item=>
                action.payload.id !== item.id)
  
          }
          case REMOVE_ERROR: 
        return {
            ...state,
            isFetchingData: false,
            error: action.payload
          }
  default: return state;
}
}


export default reducer;
