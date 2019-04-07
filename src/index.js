import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: 'It\'s my first post', likesCount: 15 },
  { id: 3, message: 'Hello, World!', likesCount: 7 }
];
let dialogsData = [
  { id: 1, name: 'Yury' },
  { id: 2, name: 'Valera' },
  { id: 3, name: 'Andrey' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Sasha' }
];
let messagesData = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'Hi, boy!' },
  { id: 3, message: 'Hi-hi!' },
  { id: 4, message: 'Hi, freind!' },
  { id: 5, message: 'Hiushki!' }
];

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
