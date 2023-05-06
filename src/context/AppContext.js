import { createContext, useReducer } from "react";
import { AppActions, FilterValues } from "./constants";

export const AppContext = createContext();

function appReducer(state,action){
    switch(action.type){
        case AppActions.CHANGE_INPUT_TEXT : 
            return {
                ...state,
                inputText : action.payload
            }

        case AppActions.CLEAR_INPUT_TEXT : 
            return {
                ...state,
                inputText : ''
            }

        case AppActions.CHANGE_FILTER_VALUE : 
            return {
                ...state,
                filterValue : action.payload
            }

        case AppActions.CLEAR_TODO_LIST : 
            localStorage.setItem('LOCAL_TODO_LIST_DATA',JSON.stringify([]));
            return {
                ...state,
                todoList : [],
            }

        case AppActions.CHANGE_THEME : 
            return {
                ...state,
                currentTheme : action.payload
            }

        case AppActions.ASSIGN_TODO_LIST : 
        case AppActions.ADD_TASK : 
        case AppActions.MARK_TASK_DONE  :  
        case AppActions.DELETE_TASK     : 
        case AppActions.EDIT_TASK_DONE  : 
            localStorage.setItem('LOCAL_TODO_LIST_DATA',JSON.stringify(action.payload));
            return {
                ...state,
                todoList : action.payload,
            }
        default : 
            return state;
    }
}

export function AppContextProvider({ children }){
    const [state,dispatch] = useReducer(appReducer,{
        inputText : '',
        filterValue : FilterValues.ALL,
        todoList : [],
        currentTheme : localStorage.getItem('chakra-ui-color-mode') ? localStorage.getItem('chakra-ui-color-mode') : 'light'
    });

    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    );
}