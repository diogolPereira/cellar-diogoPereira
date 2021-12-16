import React, { useReducer, useState } from 'react'
import { getBottles } from '../data/bottlesFake';

export const BottleContext = React.createContext();
/**
 * IMPROVEMENT: Action can pass at enum for not miss words
 * @param state 
 * @param action 
 * @returns 
 */
function BottleReducer(state, action) {
    switch (action.type) {
        case 'add': {
            return {bottles:[   
                                ...state.bottles,
                                action.payload
                            ]}
        }   
        case 'edit': {
            const index = state.bottles.findIndex(x => x.id == action.payload.id);
            if(index == -1){ throw new Error(`Id of bottle not found: ${action.payload.id}`)}
            const newBottles = state.bottles;
            newBottles[index] = action.payload
            return {bottles:newBottles}
        } 
        case 'delete': {
           
            return {bottles:state.bottles.filter(x => x.id != action.payload)}
        } 
        default: {
          throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
  }

  
function BottleProvider({children}) {
    const [state, dispatch] = React.useReducer(BottleReducer, {bottles: getBottles()})
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {state, dispatch}
  return (
    <BottleContext.Provider
      value={value}
    >
      {children}
    </BottleContext.Provider>
  );
}

export default BottleProvider
