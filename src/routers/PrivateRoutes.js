import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({auth, element}) => {
  return (
    auth 
    ? element
    : <Navigate to='/login'/>
  )
};

export default PrivateRoutes;
