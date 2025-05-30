import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { myContext } from '../context';
function Textarea({ name }) {
    const { data, setData } = useContext(myContext)
    const [lineNumberTracker, setLineNumberTracker] = useState('')
    function handleLineNumber(value) {
        const lines = value.split('\n').length;
        setLineNumberTracker(lines)
    }
    const inputValue = data[name] || ''
    // useEffect(() => { 
    //     handleLineNumber(lineNumberTracker)
    // }, [lineNumberTracker])
    return (
        <div className='code__editor'>

            <div className='code__editor-number' >
                {Array.from({ length: lineNumberTracker }, (_, i) => (
                    <div key={i}>
                        {i + 1}
                    </div>
                ))}
            </div>
            <textarea name={name} id={name} className='code__editor-text' onChange={(e) => {
                handleLineNumber(e.target.value)
                setData(prev => ({ ...prev, [name]: e.target.value }))
            }} value={inputValue}>

            </textarea>
        </div>
    )
}

export default Textarea