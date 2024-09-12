import {Input,Button} from "@nextui-org/react";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from "react";
import {auth} from "../utils/firebase"


function Signin(){
  
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handlSignWithGoogle =()=>{
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    signInWithPopup(auth , provider)
  .then((result) => {
    console.log("result",result);
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user",user);
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error",errorCode,errorMessage);
    
  });

  }

    return( 
        <div className="py-10">
        <form className="flex flex-col items-center">
        <Input
        isRequired
        type="email"
        value={email}
        size="md"
        color="primary"
        label="Email"
        onChange={(e)=> setEmail(e.target.value)}
        placeholder="Enter your email"
        className="max-w-[320px] my-4 self-center"
        />
        <Input
        isRequired
          type="password"
          value={password}
          size="md"
          color="primary"
          label="Password"
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="Enter your password"
          className="max-w-[320px] my-4 self-center"
          />
      <Button className="w-60" color="primary">
      Sign In
    </Button>

    <h1 className="text-center my-5">Or</h1>
<Button onClick={handlSignWithGoogle} className="w-60" color="primary">
      Sign In with Google

    </Button>
    </form>
          </div>
    )
}

export default Signin