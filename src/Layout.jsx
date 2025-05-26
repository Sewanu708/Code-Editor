import React, { useState } from 'react'
import MainFile from './components/MainFile'
import { motion } from 'framer-motion'
function Layout() {
    const [active, setActive] = useState('apple')
    const tabs = [
        { id: 'html', label: 'HTML' },
        { id: 'css', label: ' CSS' },
        { id: 'js', label: ' JavaScript' },
        { id: 'preview', label: ' Preview' },
    ]

    return (
        <div className='layout'>
            <div className='layout__header'>
                {tabs.map((elements, index) => {
                    return <div key={index} onClick={() => setActive(elements.id)} className={elements.id === active ? 'active' : ''}>
                        {elements.label}
                        {
                            elements.id === active && <motion.div
                                layoutId="underline"
                                className="underline"
                            />
                        }
                    </div>
                })}


            </div>
            <MainFile active={active} />
        </div>
    )
}

export default Layout