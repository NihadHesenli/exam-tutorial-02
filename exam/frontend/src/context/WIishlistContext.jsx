/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"


export const WishlistContext = createContext(null)

const WishlistProvider = ({children}) => {

    const [fav,setFav] = useState([])
    
    const favToggle = (prod)=>{
        const favitem = fav.find((p)=> p._id === prod._id )
        if (favitem) {
            setFav((prev)=>prev.filter((product) => product._id !== prod._id))
        }else {
            setFav((prev)=>[...prev , prod])
        }
    }


    const clearFav = ()=>{
        setFav([])
    }


  return (
    <WishlistContext.Provider value={{fav,favToggle,clearFav}}>{children}</WishlistContext.Provider> 
  )
}

export default WishlistProvider