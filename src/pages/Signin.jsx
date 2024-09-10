import {Input,Button} from "@nextui-org/react";
import { useState } from "react";

function Signin(){
  
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

    return( 
        <div className="my-10 ">
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

      <Button className="w-60" color="primary">
      Sign In with Google
    </Button>
    </form>
          </div>
    )
}

export default Signin