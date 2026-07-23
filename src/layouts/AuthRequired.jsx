import {useState, useContext} from "react"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";


export default function AuthRequired(){
    const { currentUser } = useContext()
    const navigate = useNavigate()
    if(!currentUser){
        navigate("/")
    } else{
        return <Outlet/>
    }
}