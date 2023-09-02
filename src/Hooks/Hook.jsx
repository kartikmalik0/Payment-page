import { useEffect, useState } from "react"

export const useCardDetails=()=>{

    const [topCard , setTopcard] = useState({})

    return {topCard,setTopcard}
}
