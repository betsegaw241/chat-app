import React, { useState} from 'react'

import { Container, Form,Input,Button } from '../style/AuthStyle'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);


     const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
  return (
    <Container>
            <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
          <Form>
              {isSignup &&( <Input type="text" name="username" placeholder="Username" />)}
             
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Password" />
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
