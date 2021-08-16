import {GET_CATS}  from '../constants/action-types'

const initialState = {
  category  :[],
}
const categoriesReducer=(state=initialState,action)=>{
     // eslint-disable-next-line
    const {type,payload}=action
    switch (type) {
      case GET_CATS :
        return {...state, category:payload};
        default:
            return state;
          
    }
}

export default categoriesReducer