import  { socket } from '../../Logic/http'
import  axios  from '../../Logic/http'
import messageAction from '../message-actions'

export default {
  emitSocketMessage: messageData => {
    socket.emit('message-send', messageData)
  },

  /* dispatch dispatchReceivedMessage when new data is received */
  receiveSocketMessage: dispatch => {
    console.log('Aqui1.1')
    socket.on('message-receive', async data => {
      console.log('Aqui1.2')
      if (data) dispatch(messageAction.dispatchReceivedMessage(data))
    })
  },

  fetchMoreMessage: async currentMessageData => {
    const response = await axios.get(
      `/messages/${currentMessageData.channel_id}`,
      {
        params: {
          offset: currentMessageData.offset,
        },
      },
    )
    return response
  },
}
