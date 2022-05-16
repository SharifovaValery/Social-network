const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'xoxo' },
  ],
  dialogs: [
    { id: 1, name: 'Булочка' },
    { id: 2, name: 'Манюня' },
  ],
  newMessageBody: '',
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 3, message: body }],
      };
    default:
      return state;
  }
};

export default dialogsReduser;
