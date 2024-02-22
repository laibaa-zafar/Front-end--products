import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from './Header' 

function Protected (props) {
  let Cmp=props.Cmp
  const navigate= useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate("/register"); 
    }
  }, [navigate]); 
  return (
    <div>
     <Cmp/>
    </div>
  )
}

export default Protected
