"use client";
import { Inter } from '@next/font/google'
import { Form } from './componant/Form'
import LoginForm from './componant/LoginForm';
import {useContext} from 'react';

import { AuthContext } from './contexts/auth';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens} = useContext(AuthContext);

  return (
   <div>
    { tokens? <Form /> : <LoginForm/>}
    


   </div>
  );
}
