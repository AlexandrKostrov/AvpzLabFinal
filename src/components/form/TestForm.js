import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import './SignupForm.css';

function renderInputWithError({
   input,
    type,
    label,
    meta: { error, touched },
  }) {
    return (
      <label>
        {label}:
        <div>
          <input {...input} onChange={event => {
      input.onChange(event);
     }} type={type} />
          {touched && error && <p className="error">{error}</p>}
        </div>
      </label>
    );
  }
  const passingScore={
    PI:179,
    IST:156,
    AVIONICA:135,
    ECONOMICS:149,
    AppMath:173,
    CS:184,
  };
class SignupForm extends Component {
    onSubmit = res => {
        let y=0;
    const x=Object.keys(res).reduce((acc,val)=>{
         val==='UkrMova'?y=res[val]*0.2:val==='Math'?y=res[val]*0.5:val==='Phyisic'?y=res[val]*0.2:val==='Diplom'?y=res[val]*0.1:'';
         if(val!=='result'){
          acc=acc+y ;}
         console.log(acc);
         return acc;
     },0);
     
    const arr= Object.keys(passingScore).filter(key=>{
          return x>=passingScore[key]
         });
    res.result=arr.map(val=>{return val});
       };
  
    render() {
      const { submitting, valid, handleSubmit } = this.props;
  
      return (
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            component={renderInputWithError}
            type="text"
            name="UkrMova"
            label="Ukr Mova"
          />
          <Field
            component={renderInputWithError}
            type="text"
            name="Math"
            label="Mathematic"
          />
          <Field
            component={renderInputWithError}
            type="text"
            name="Phyisic"
            label="Phyisic or foreign language"
          />

           <Field
            component={renderInputWithError}
            type="text"
            name="Diplom"
            label="School Diplom"
          />
  
          <button type="submit" disabled={submitting || !valid}>
            Calculate
          </button>
          <Field
            component={'textarea'}
            type="textarea"
            name="result"
            label="result"
          />
        </form>
      );
    }
  }

  export default reduxForm({
    validate: values => {
    //   const errors = {};
    //   const res={};

    //   res.email=+values.email*0.2;
    //   res.pasword=+values.pasword*0.2;
    //   res.passwordConfirm=+values.passwordConfirm*0.2;
    //   return res;
    //   if (!values.email) errors.email = 'Missing email';
    //   if (!values.password) errors.password = 'Missing password';
    //   if (!values.passwordConfirm)
    //     errors.passwordConfirm = 'Missing password confirmation';
  
    //   if (Object.keys(errors).length) return errors;
  
    //  if (!values.email.includes('@')) errors.email = 'Incorrect email';
  
      
  
    
    },
    // asyncValidate: values => {
    //   return validateEmail(values.email).then(
    //     r => {},
    //     e => {
    //       throw { email: 'Email taken' };
    //     }
    //   );
    // },
    // asyncBlurFields: ['email'],
    form: 'signup',
   // initialValues:{email:100,},
  })(SignupForm);
  