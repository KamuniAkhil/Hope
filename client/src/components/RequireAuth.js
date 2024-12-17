import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from "./Auth.js";

export const RequireAuth=({children})=> {

  const auth=useAuth()
 

  if(!auth.user.isLogged){
    return <Navigate to="/login"  />
  }
  return children
}