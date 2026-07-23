import {useState, useContext} from "react"
import { Outlet, Navigate} from "react-router-dom"
import { AuthContext } from "../App";


export default function AuthRequired(){
    const { currentUser } = useContext(AuthContext)
    if(!currentUser){
       return  <Navigate to="/log-in" replace/>
    } 
    return <Outlet/>
    
}