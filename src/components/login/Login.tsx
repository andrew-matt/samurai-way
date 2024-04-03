import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'login'} type={'text'} placeholder={'Login'}/>
      </div>
      <div>
        <Field component={'input'} name={'password'} type={'password'}
               placeholder={'Password'}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
        <span>&nbsp;Remember me</span>
      </div>
      <button type={'submit'}>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
