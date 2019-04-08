let rerenderEntireTree = () => {
    console.log('state changed');
}
let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 15 },
            { id: 3, message: 'Hello, World!', likesCount: 7 }
        ],
        newPostText: 'proweb4all.ru'
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
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;