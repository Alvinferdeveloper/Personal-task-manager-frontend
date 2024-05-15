import { useEffect, useState } from "react";
import { useStore } from "../store/store";

export default function useGetTasks(id){
    const [ tasks, setTasks] = useState([]);
    const {  categories } = useStore();

    useEffect(()=>{
        const tasks = getTasks();
        setTasks(tasks);
    },[categories])

    const getTasks=()=>{
        const categoryDoc = categories.categories.find(cat=> cat.id == id );
        return categoryDoc ? categoryDoc.tasks : [];
    }

    return { tasks };
}