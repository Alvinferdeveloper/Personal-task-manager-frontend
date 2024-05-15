import { useEffect, useState } from "react";
import { useStore } from "../store/store";
export default function useAuth(){
    const { authenticated, authenticate} = useStore();
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(()=>{
        const tryAuth =async ()=>{
            await authenticate();
            setIsLoading(false);
        }
       tryAuth();
    },[]);

    return { authenticated, isLoading }
}