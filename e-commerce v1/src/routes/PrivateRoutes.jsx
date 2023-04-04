import { Navigate } from "react-router-dom"

export const PrivateRoutes =({isAutentication, children})=> {
    
    return isAutentication
    ? children
    : <Navigate to='/login' />
}