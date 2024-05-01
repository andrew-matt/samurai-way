const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogType = {
  id: string
  name: string
}

export type MessageType = {
  id: string
  message: string
}

export type InitialStateType = {
  dialogs: DialogType[]
  messages: MessageType[]
}
const initialState: InitialStateType = {
  dialogs: [
    {id: '1', name: 'John'},
    {id: '2', name: 'Bob'},
    {id: '3', name: 'Ann'},
    {id: '4', name: 'Helen'},
    {id: '5', name: 'Noah'},
  ],
  messages: [
    {id: '1', message: 'Hello there'},
    {id: '2', message: 'Nice to meet you'},
    {id: '3', message: 'Hell yeah!'},
  ],
};

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsReducerActionsType): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, {id: '6', message: action.newMessageBody}],
      };
    }
    default:
      return state;
  }
};

export type DialogsReducerActionsType = ReturnType<typeof sendMessageActionCreator>


// actions
export const sendMessageActionCreator = (newMessageBody: string) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  } as const;
};