import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { Fragment } from "react";

const SignIn = ()=>{
  const logGoogleUser = async () =>{
      const {user} = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
  }  
  
  return (
    <Fragment>
      <div>This is the sign in Page</div>
      <button onClick = {logGoogleUser}>Sign in with Google Auth</button>
      </Fragment>
    );
    
}

export default SignIn;