export const INCREMENT = 'e.INCREMENT'
export const ASYNC_INCREMENT = 'e.ASYNC_INCREMENT'
 export const CALL_FAKE_API = 'e.CALL_FAKE_API'
export const RECORD_USER = 'e.RECORD_USER'


export  const increment = () => ({
  type: INCREMENT,
})
export  const asyncIncrement = seconds => ({
  type: ASYNC_INCREMENT,
  seconds
})
export const callFakeApi = () => ({
  type: CALL_FAKE_API
})