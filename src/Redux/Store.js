import dialogsReduser from './dialogs-reduser';
import profileReducer from './profile-reducer';
import sidebarReduser from './sidebar-reduser';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Привіт, суша', likesCount: 12 },
        { id: 2, message: 'Як справи, суша?', likesCount: 10 },
      ],
      newPostText: 'bzzzzz',
    },
    dialogPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'xoxo' },
      ],
      dialogs: [
        { id: 1, name: 'Булочка' },
        { id: 2, name: 'Манюня' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _renderTree() {
    console.log('Bzzz');
  },

  getState() {
    return this._state;
  },
  Subscribe(observer) {
    this._renderTree = observer;
  },

  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._renderTree(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._renderTree(this._state);
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReduser(this._state.dialogPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);

    this._renderTree(this._state);
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body });

window.store = store;
export default store;
