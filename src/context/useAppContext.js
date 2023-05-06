import { AppContext } from "./AppContext";
import { useContext } from "react";

export function useAppContext(){
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Context Not Found");
    }

    return context;
}