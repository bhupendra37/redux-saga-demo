import {
    INCREMENT,
    ASYNC_INCREMENT,
    CALL_FAKE_API,
    RECORD_USER } from "./action";
  



const initialState = {
    count: 0,
    user: null
  }
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT: {
         return Object.assign({}, state, { count: state.count + 1 })
      }
      case RECORD_USER: {
         const { result } = action
        return Object.assign(
          {},
          state,
          { user: `NAME: ${result.name} GENDER: ${result.gender}` }
        )
      }
      default: return state
    }
  }