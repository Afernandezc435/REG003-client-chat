import { actionTypes } from '../action-types/index'
import messageService from './services/message-service'

const act =  {
  /**
   * fetch API with Axios
   */
  fetchMoreMessage: currentMessageData => async dispatch => {
    dispatch({
      type: actionTypes.MESSAGE_FETCH_MORE,
    })
    try {
      const response = await messageService.fetchMoreMessage(
        currentMessageData,
      )
      const { data } = response
      dispatch({
        type: actionTypes.MESSAGE_FETCH_MORE_SUCCESS,
        payload: data,
      })
    } catch (err:any) {
      const { data } = err.response
      dispatch({
        type: actionTypes.ERROR_MESSAGE,
        payload: data.meta.message,
      })
    }
  },

  /**
   * Web Socket with Socket.io
   */
  emitSocketMessage: messageData => () => {
    messageService.emitSocketMessage(messageData)
  },

  // pass in dispatch, let socket.io dispatch dispatchReceivedMessage when data is received
  receiveSocketMessage: () => dispatch => {
    console.log('Aqui1')
    messageService.receiveSocketMessage(dispatch)
  },

  dispatchReceivedMessage: data => (dispatch) => {
    if (data.meta.type === 'success') {
      const newData = { ...data }
      console.log('Aqui2')
      dispatch({
        type: actionTypes.MESSAGE_SOCKET_RECEIVE ,
        payload: newData,
      })
    } else {
      dispatch({
        type: actionTypes.ERROR_MESSAGE,
        payload: data.meta.message,
      })
    }
  },
}


export default act
export const actions = act
