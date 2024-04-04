import { addPostActionCreator, PostType } from 'redux/profile-reducer';
import { MyPosts } from 'components/profile/my_posts/MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import { Dispatch } from 'redux';

type MapStateToPropsType = {
  posts: PostType[]
}

type MapDispatchToProps = {
  addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
