import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useCardDetails=()=>{
    const [topCard , setTopcard] = useState({})

    
    return {topCard,setTopcard}
}
