import React, { useState} from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { Container, Form,Input,Button } from '../style/AuthStyle'
import {  auth } from "../firebase";

const Auth =  () => {
    const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
   console.log(username, email, password);
try {
  const res = await createUserWithEmailAndPassword(auth,email, password);
console.log(res);
} catch (error) {
  
}
  
  }



     const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
  return (
    <Container>
            <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
          <Form onSubmit={handleSubmit}>
              {isSignup &&( <Input type="text" name="username" placeholder="Username" />)}
             
              <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
      { isSignup && <Input type="text" name="image" placeholder="image url" />}
        <Button type="submit">{isSignup ? 'Sign Up' : 'Login'}</Button>
       
          </Form>
           <div>
                     <p  >
                          {isSignup
                           ? "Already have an account?" 
                           : "Don't have an account?"
                           }
                           <span onClick={switchMode}>
                           {isSignup ? 'Login' : 'Sign up'}
                           </span>
                      </p>
                  </div>
    </Container>
  )
}

export default Auth
