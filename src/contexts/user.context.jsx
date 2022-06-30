import { createContext  , useState , useEffect} from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener , signOutUser } from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
       currentUser : null , 
       setCurrentUser : ()=>null
});

export const UserProvider = ( {children} ) =>{
    const [currentUser , setCurrentUser] = useState(null);
    const value = {currentUser , setCurrentUser}
   
    useEffect(()=>{
       // we dont not need this listener when this component unmounts 
       // run only when the componenet mounts
       const unsubscribe = onAuthStateChangedListener((user)=>{
              console.log(user);
              if(user){
                     createUserDocumentFromAuth(user); // if user already exist we are handling that in the function itself
              }
              setCurrentUser(user);
       });
       signOutUser(); // auth remembers users after refreshing too
       return unsubscribe;  // unsubsricbe will be called when this component unmounts
    } , []);

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


