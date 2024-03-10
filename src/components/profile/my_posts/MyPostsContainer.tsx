import {
  addPostActionCreator, PostType,
  updateNewPostTextActionCreator,
} from 'redux/profile-reducer';
import { MyPosts } from 'components/profile/my_posts/MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import { Dispatch } from 'redux';

type MapStateToPropsType = {
  posts: PostType[]
  newPostText: string
}

type MapDispatchToProps = {
  updateNewPostText: (newPostText: string) => void
  addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    updateNewPostText: (newPostText: string) => {
      dispatch(updateNewPostTextActionCreator(newPostText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
