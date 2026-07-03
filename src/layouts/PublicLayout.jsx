import {Outlet} from "react-router-dom"
import PublicFooter from "../components/layout/PublicFooter"

export default function PublicLayout(){
    return(
        <>
            <Outlet/>
            <PublicFooter/>
        </>
    )
}