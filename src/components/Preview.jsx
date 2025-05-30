import React, { useContext, useEffect, useRef } from 'react'
import { myContext } from '../context'

function Preview() {
  const preview = useRef(null)
  const { data } = useContext(myContext)
  const code = `
  <head>
   <style> ${data.css}</style>
  </head>
  <body>
  ${data.html}
  </body>
  <script>
  ${data.js}
  </script>
  `
  useEffect(() => {
    preview.current.srcdoc = code;
    console.log(code);
    
  }, [data])
  return (
  <div style={{ height: '85%', width: '100%', display: 'flex', justifyContent: 'center' }}>
  <iframe
    ref={preview}
    style={{
      border: 'none',
      width: '80%',
      height: '100%',
    }}
    title="Preview"
  />
</div>

  )
}

export default Preview