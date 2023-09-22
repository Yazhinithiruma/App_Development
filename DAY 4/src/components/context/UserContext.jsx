import { createContext,useContext } from "react";
const UserContext=createContext();
export const useUser=()=>{
    return useContext(UserContext);
}
const UserProvider=()=>{
    const[isUserLoggedIn,setIsUserLoggedIn]=useState(false);

    const login=()=>{
        setIsUserLoggedIn(true);
    }

    const logout=()=>{
        setIsUserLoggedIn(false);
    }
}