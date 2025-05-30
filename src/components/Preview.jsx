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
    <div>
      <iframe ref={preview} height='410' width='80%'>

      </iframe>
    </div>
  )
}

export default Preview