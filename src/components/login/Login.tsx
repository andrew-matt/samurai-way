import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from 'components/common/forms_controls/FormsControls';
import { required } from 'utils/validators/validators';
import { connect } from 'react-redux';
import { login, logout } from 'redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { AppStateType } from 'redux/store';

type MapStateToPropsType = {
  isAuth: boolean
}

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
  logout: () => void
  isAuth: boolean
}

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={'email'} type={'text'} placeholder={'Email'}
               validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={'password'} type={'password'}
               placeholder={'Password'} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
        <span>&nbsp;Remember me</span>
      </div>
      <button type={'submit'}>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const Login: React.FC<LoginPropsType> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    const {email, password, rememberMe} = formData;
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login, logout})(Login);
