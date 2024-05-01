import React from 'react';
import { InitialStateType, sendMessageActionCreator } from 'redux/dialogs-reducer';
import { Dialogs } from 'components/dialogs/Dialogs';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { AppStateType } from 'redux/store';
import { withAuthRedirect } from 'hoc/withAuthRedirect';

type MapStateToPropsType = {
  dialogsPage: InitialStateType
}

type MapDispatchToProps = {
  sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);