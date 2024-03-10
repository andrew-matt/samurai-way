import {
  InitialStateType,
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from 'redux/dialogs-reducer';
import { Dialogs } from 'components/dialogs/Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from 'redux/store';

type MapStateToPropsType = {
  dialogsPage: InitialStateType
}

type MapDispatchToProps = {
  updateNewMessageBody: (newMessageBody: string) => void
  sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    updateNewMessageBody: (newMessageBody: string) => {
      dispatch(updateNewMessageBodyActionCreator(newMessageBody));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);