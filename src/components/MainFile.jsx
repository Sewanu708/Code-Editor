import React from 'react'
import { motion } from 'framer-motion'
import Textarea from './Textarea'
function MainFile({ active }) {
    const apple = <div>
        Apple
    </div>
    const orange = <div>
        Orange
    </div>
    const banana = <div>
        Banana
    </div>
    return (
        <div
            className='layout__main'>
            <Textarea name={active} />
        </div>
    )
}

export default MainFile