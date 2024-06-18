import { Dispatch, FC, ReactNode, createContext, useContext, useReducer } from "react";
import {State, ActionTypes} from './reducer' 

interface StateProviderProps{
    children: ReactNode;
    reducer: (state: State, action: ActionTypes) => State;
    initialState: State;
}


export const StateContext = createContext<[State, Dispatch<ActionTypes>] | undefined>(undefined);

export const StateProvider: FC<StateProviderProps> = ({children, reducer, initialState}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);