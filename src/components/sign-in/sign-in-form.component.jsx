import {  signInWithGooglePopup , signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';


const defaultFormFields = {
    email : '',
    password : '',
} // default values of form 


const SignInForm = ()=>{
    const [formFields , setFormFields] = useState(defaultFormFields); // setting state 
    const { email , password } = formFields ;

    const handleChange = (event)=>{
        const {name , value} = event.target;
        setFormFields({...formFields , [name]:value});  
    };

    const signInWithGoogle = async () =>{
       await signInWithGooglePopup();
    }  
    const resetFormFields = function(){
        setFormFields(defaultFormFields);
    }    
    const handleSubmit = async (event)=>{
          event.preventDefault();
          try{
             await signInAuthUserWithEmailAndPassword(email , password)
            resetFormFields();
          }
          
          catch(err){

            switch(err.code){
                case 'auth/wrong-password':
                    alert('wrong password')
                    break;
                case 'auth/user-not-found':
                    alert('no user with the mail mentioned')
                default : 
                    alert('some error occured')
            }

            if(err.code === 'auth/wrong-password'){
                alert('wrong email and password')
            }
              console.log(err);
          }
    }

  
    return (
        <div className='sign-up-container'>
            <h2>Already Have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput label = "Email" type = "email" required onChange= {handleChange} name = "email" value = {email} />              
            <FormInput label = "Password" type = "password" required onChange= {handleChange} name = "password" value = {password} />              
            <div className='buttons-container'>
                <Button type ="submit" buttonType="inverted">Sign In</Button>
                <Button type = 'button' onClick = {signInWithGoogle} buttonType = "google">Google Sign In</Button>
            </div>
            </form>
        </div>
    );
}

export default SignInForm;