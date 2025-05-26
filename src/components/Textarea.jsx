import React, { useEffect, useState } from 'react'
import './index.css'
function Textarea({ name }) {
    const [lineNumberTracker, setLineNumberTracker] = useState('')
    function handleLineNumber(value) {
        const lines = value.split('\n').length;
        // const lineNumber = Array.from({ length: lines }, (_, i) => i + 1).join('<br/>')
        setLineNumberTracker(lines)
    }
    return (
        <div className='code__editor'>

            <div className='code__editor-number' >
                {Array.from({length:lineNumberTracker},(_,i)=>(
                    <div key={i}>
                        {i+1}
                    </div>
                ))}
            </div>
            <textarea name={name} id={name} className='code__editor-text' onChange={(e)=>handleLineNumber(e.target.value)}>

            </textarea>
        </div>
    )
}

export default Textarea