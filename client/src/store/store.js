import React, { useState, createContext } from "react";

export const Store = createContext();

const DEFAULT_STATE = {
    AUTH_USER: {}
}

export const StoreProvider = props => {
    const [state, setState] = useState(DEFAULT_STATE)
    return (
        <Store.Provider value={[state, setState]}>
            {props.children}
        </Store.Provider >
    )
}