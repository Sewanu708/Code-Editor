import React, { useEffect, useState } from 'react'
import MainFile from './components/MainFile'
import { motion } from 'framer-motion'
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";
function Layout() {
    const [active, setActive] = useState('html')
    const tabs = [
        { id: 'html', label: 'HTML', label2: <FaHtml5 /> },
        { id: 'css', label: ' CSS', label2: <FaCss3Alt /> },
        { id: 'js', label: ' JavaScript', label2: <FaJsSquare /> },
        { id: 'preview', label: ' Preview', label2: <CiPlay1 /> },
    ]

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function widthUpdate() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', widthUpdate)

        return () => window.removeEventListener('resize', widthUpdate)
    }, [width])
    console.log(width)
    return (
        <div className='layout'>
            <div className='layout__header'>
                {tabs.map((elements, index) => {
                    return <div key={index} onClick={() => setActive(elements.id)} className={elements.id === active ? 'active' : ''}>
                        {width < 500 ? elements.label2 : elements.label}
                        {
                            (elements.id === active && width > 500) && <motion.div
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