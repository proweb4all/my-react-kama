import {rerenderEntireTree} from '../render';
let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 15 },
            { id: 3, message: 'Hello, World!', likesCount: 7 }
        ]
    },
    messagesPages: {
        dialogsData: [
            { id: 1, name: 'Yury' },
            { id: 2, name: 'Valera' },
            { id: 3, name: 'Andrey' },
            { id: 4, name: 'Sveta' },
            { id: 5, name: 'Sasha' }
        ],
        messagesData: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'Hi, boy!' },
            { id: 3, message: 'Hi-hi!' },
            { id: 4, message: 'Hi, freind!' },
            { id: 5, message: 'Hiushki!' }
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}
export default state;