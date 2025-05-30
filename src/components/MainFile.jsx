import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import Textarea from './Textarea'
import { myContext } from '../context'
import Preview from './Preview'
function MainFile({ active }) {
    const { data } = useContext(myContext)
    if (active === 'preview') localStorage.setItem('data', JSON.stringify(data))
    return (
        <div
            className='layout__main'>
            {active === 'preview' ? <Preview /> : <Textarea name={active} />}

        </div>
    )
}

export default MainFile