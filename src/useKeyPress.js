import { useEffect } from "react";

export const useKeyPress = (callback, targetkey) => {
    useEffect(()=>{

        const KeyPressHandler = (event) =>{
            if(event.key === targetkey){
                callback()
            }
        }
        window.addEventListener('keydown', KeyPressHandler);
        return() => {
            window.removeEventListener('keydown',KeyPressHandler)
        }
    },[callback, targetkey]);
}