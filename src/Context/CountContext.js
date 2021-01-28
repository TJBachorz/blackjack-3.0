import React, { useState, useContext } from 'react';

const CountContext = React.createContext()
const CountIncrementContext = React.createContext()
const CountDecrementContext = React.createContext()

export const useCount = () => {
    return useContext(CountContext)
}

export const useIncrementCount = () => {
    return useContext(CountIncrementContext)
}

export const useDecrementCount = () => {
    return useContext(CountDecrementContext)
}

export function CountProvider({ children }) {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count => count + 1)
    }

    const decrementCount = () => {
        setCount(count => count - 1)
    }

    return (
        <CountContext.Provider value={count}>
            <CountIncrementContext.Provider value={incrementCount}>
                <CountDecrementContext.Provider value={decrementCount}>
                    {children}
                </CountDecrementContext.Provider>
            </CountIncrementContext.Provider>
        </CountContext.Provider>
    )
}
