import React from 'react';
import style from './FormsControls.module.css';

export const FormControl = (props: any) => {
  const {meta, children} = props;
  const hasError = meta.touched && meta.error;

  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      <div>
        {children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props: any) => {
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...props}/>
    </FormControl>
  );
};

export const Input = (props: any) => {
  return (
    <FormControl {...props}>
      <input {...props.input} {...props}/>
    </FormControl>
  );
};