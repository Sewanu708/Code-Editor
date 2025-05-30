import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
 export const myContext = createContext('');
function GlobalState({ children }) {
    const [data, setData] = useState({
        html: '',
        css: '',
        js: ''
    })
    useEffect(() => {
        const loadedData = JSON.parse(localStorage.getItem('data')) || {
            html: '',
            css: '',
            js: ''
        };
        setData(loadedData)
    }, [])

    return (
        <myContext.Provider value={{data,setData}}>{children}</myContext.Provider>
    )
}

export default GlobalState