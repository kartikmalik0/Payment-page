import { useNavigate } from "react-router-dom"

export const NavigateToUpi=()=>{
    const navigate = useNavigate()

    function ToUpi(){
       navigate('/card')
    }

    return{ToUpi}
}