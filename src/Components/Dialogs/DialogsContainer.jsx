import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/Store';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});
const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendMessageCreator());
  },
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageBodyCreator(body));
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
