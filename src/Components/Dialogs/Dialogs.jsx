import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  const { newMessageBody } = state;

  const onSendMessageClick = () => {
    props.sendMessage();
  };
  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
        <div className={classes.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                placeholder="Надішліть записочку "
                onChange={onNewMessageChange}
              />
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
