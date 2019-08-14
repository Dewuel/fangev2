import React from 'react';
import {BrowserRouter,Redirect} from 'react-router-dom'

function Logout(){
  return (
    <BrowserRouter>
      <Redirect to="/login" exact/>
    </BrowserRouter>
  )
}
export default Logout