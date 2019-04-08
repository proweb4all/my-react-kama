let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 15 },
                { id: 3, message: 'Hello, World!', likesCount: 7 }
            ],
            newPostText: 'proweb4all.ru'
            //newPostText: ''
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
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;