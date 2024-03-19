import { create} from "zustand";
import { httpRequest } from "../utils/httpRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

const request = new httpRequest();
export const useStore = create((set)=>({
    authenticated:false,
    user:null,
    loading:false,
    error:null,
    categories:[],
    tasks:[],
    getCategories:async ()=>{
        try{
            const res = await request.get('category/getCategories');
            if(!res.ok){
                throw new Error("Error al obtener las categorias");
            }
            const categories = await res.json();
            set({categories});
        }catch(e){

        }
    },
    setUser:async(data) => {
       try {
        const res = await request.post('/register',data);
        if(!res.ok){
            const dataError = await res.json();
            throw new Error(dataError.message);
        }
        const user = await res.json();
        set({user});
        set({error:null});
        set({authenticated:true});
        await AsyncStorage.setItem('token', user.token);
       }catch (e) {
        set({error:e.message});
       }
    }
}));
