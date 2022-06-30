import {initializeApp} from 'firebase/app';
import {getAuth ,
    signInWithPopup ,
    GoogleAuthProvider ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword , signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {getFirestore , doc , getDoc , setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
// COnfiguration object , ye mujhe firebase ki site se mila h 
apiKey: "AIzaSyDOjhW-KjNV6QZx1qilknDUgqksr1CfBFA",
authDomain: "crwn-clothing-ba538.firebaseapp.com",
projectId: "crwn-clothing-ba538",
storageBucket: "crwn-clothing-ba538.appspot.com",
messagingSenderId: "442874791036",
appId: "1:442874791036:web:755f6fa5d04e67dfc7b5f9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // initializing my App from the configuration object i got from the website
// Provider h 
const googleProvider =new GoogleAuthProvider(); // Auth provider object h ye
googleProvider.getCustomParameters({
    prompt : "select_account" // account selection vala parameter h ye 
});
// console.log('lolololol')
export const auth = getAuth();
export const signInWithGooglePopup = ()=>{
   return  signInWithPopup(auth , googleProvider);
}


export const db = getFirestore(); // Get my database bro . Oh yeah
export const createUserDocumentFromAuth = async (userAuth , additionalInformation = {})=>{
    if(!userAuth)return ;
    // user auth se user ka document create kro aur , database m store kro, ye ek function h jisme hm user ka data store kr rhe h  
    const userDocRef = doc(db , 'users' , userAuth.uid); // find in db in users collection this uid, GOogl is smart enogh to gen. me a new token
    // console.log(userDocRef);   
    const userSnapshot = await getDoc(userDocRef); // key jo mili h usse document nikalta 
    // console.log(userSnapshot , userSnapshot.exists())

    // if user data exist , return user data 
    if(!userSnapshot.exists()){
        const {displayName , email} = userAuth ;
        const createdAt = Date();
        try{
            await setDoc(userDocRef , {
                displayName , email , createdAt , ...additionalInformation
            });
        }
        catch(err){
              console.log('user creation encountered an error' , err);
        }
    }
}

export const createAuthUserWithEmailAndPassword = async (email , password) =>{

    if(!email || !password)return ;

     return await createUserWithEmailAndPassword(auth , email , password);
     
}
export const signInAuthUserWithEmailAndPassword = async (email , password) =>{

    if(!email || !password)return ;

     return await signInWithEmailAndPassword(auth , email , password);
     
}

export const signOutUser = async ()=> {await signOut(auth);}

// callback will be called whenever our auth changes
export const onAuthStateChangedListener = (callback)=>onAuthStateChanged(auth , callback);
