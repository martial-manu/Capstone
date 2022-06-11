
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import SignInForm from '../../components/sign-in/sign-in-form.component';
import './authentication.styles.scss'

// sign up form part 1
const Authentication = ()=>{
  
  return (
    <div className = "authentication-container">
        
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
      </div>
    );
    
}

export default Authentication;