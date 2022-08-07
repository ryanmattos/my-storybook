import React, { useState } from 'react';
import './login-form.css'

interface LoginFormProps {

}

export const LoginForm = ({}: LoginFormProps) => {

   const [isValidated, setIsValidated] = useState<boolean>(false)

   function handleClick() {
      setIsValidated(!isValidated);
   }

   return (
      <div className="login-form">
         <p style={{ display:  isValidated ? 'block' : 'none' }}>Everything is good bro, keep going on</p>
         <input type="email" name="email" id="email" data-testid="email" placeholder="email"/>
         <input type="password" name="password" id="password" data-testid="password" placeholder="password"/>
         <button type="submit" onClick={handleClick}>Submit</button>
      </div>
   )
}