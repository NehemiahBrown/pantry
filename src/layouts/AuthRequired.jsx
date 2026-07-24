import {useState, useContext} from "react"
import { Outlet, Navigate} from "react-router-dom"
import { AuthContext } from "../App";
import LoadingScreen from "../components/common/LoadingScreen.jsx"


export default function AuthRequired(){
    const { currentUser, loadingPageActive } = useContext(AuthContext)
    if(loadingPageActive){
       return  <LoadingScreen />
    } 

    if(!currentUser){
        return <Navigate to="/log-in" replace/>
    }

    return <Outlet/>
    
}
