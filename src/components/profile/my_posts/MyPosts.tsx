import React from 'react';
import style from './MyPosts.module.css';
import { Post } from 'components/profile/my_posts/post/Post';
import { MyPostsPropsType } from 'components/profile/my_posts/MyPostsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from 'utils/validators/validators';
import { Textarea } from 'components/common/forms_controls/FormsControls';

type FormDataType = {
  newPostText: string
}

const maxLength10 = maxLengthCreator(10);

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.posts.map(post => <Post key={post.id} id={post.id}
                                                      message={post.message}
                                                      likesCount={post.likesCount}/>);

  const onAddPost = (values: FormDataType) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={onAddPost}/>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component={Textarea} name={'newPostText'}
                 validate={[required, maxLength10]}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddPostForm);
