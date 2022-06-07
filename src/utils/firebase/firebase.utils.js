import {initializeApp} from 'firebase/app';
import {getAuth , signInWithRedirect , signInWithPopup , GoogleAuthProvider} from 'firebase/auth'
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
const provider =new GoogleAuthProvider(); // Auth provider object h ye
provider.getCustomParameters({
    prompt : "select_account" // account selection vala parameter h ye 
});
console.log('lolololol')
export const auth = getAuth();
export const signInWithGooglePopup = ()=>{
   return  signInWithPopup(auth , provider);
}

export const db = getFirestore(); // Get my database bro . Oh yeah
export const createUserDocumentFromAuth = async (userAuth)=>{
    // user auth se user ka document create kro aur , database m store kro, ye ek function h jisme hm user ka data store kr rhe h  
    const userDocRef = doc(db , 'users' , userAuth.uid); // find in db in users collection this uid, GOogl is smart enogh to gen. me a new token
    console.log(userDocRef);   
    const userSnapshot = await getDoc(userDocRef); // key jo mili h usse document nikalta 
    console.log(userSnapshot , userSnapshot.exists())

    // if user data exist , return user data 
    if(!userSnapshot.exists()){
        const {displayName , email} = userAuth ;
        const createdAt = Date();
        try{
            await setDoc(userDocRef , {
                displayName , email , createdAt
            });
        }
        catch(err){
              console.log(err);
        }
    }
}