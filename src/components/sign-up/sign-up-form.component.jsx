import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
} // default values of form 


const SignUpForm = ()=>{
    const [formFields , setFormFields] = useState(defaultFormFields); // setting state 
    const {displayName , email , password , confirmPassword} = formFields;
    const handleChange = (event)=>{
        const {name , value} = event.target;
        setFormFields({...formFields , [name]:value});  
    };
    const resetFormFields = function(){
        setFormFields(defaultFormFields);
    }    
    const handleSubmit = async (event)=>{
          event.preventDefault();

          if(password !== confirmPassword){
              alert('the passwords do not match'); return ;
          }

          try{
             const response = await createAuthUserWithEmailAndPassword(email , password);
             console.log(response);
             await createUserDocumentFromAuth(response.user , {displayName});
             resetFormFields();
          }
          
          catch(err){
              if(err.code === 'auth/email-already-in-use'){
                  alert('email already in use , please try login')
              }
              else console.log('usr creation caused an error' , err)
          }
    }

  
    return (
        <div className='sign-up-container'>
            <h2>Don't Have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput label = "Display Name" type = "text" required onChange= {handleChange} name = "displayName" value = {displayName} />              
            <FormInput label = "Email" type = "email" required onChange= {handleChange} name = "email" value = {email} />              
            <FormInput label = "Password" type = "password" required onChange= {handleChange} name = "password" value = {password} />              
            <FormInput label = "Confirm Password" type = "password" required onChange= {handleChange} name = "confirmPassword" value = {confirmPassword} />              
            <Button type ="submit" buttonType="inverted">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;