const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ],
    newMessageText: ''
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
        case SEND_MESSAGE: {
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 6, message: text}]
            }
        }
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => 
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})
    
export default messagesReducer;