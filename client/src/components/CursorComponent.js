import React from "react";
import { motion, useMotionValue } from "framer-motion";

function Cursor (props) {
    const cursorX = useMotionValue(window.innerWidth / 2 - 6);
    const cursorY = useMotionValue(window.innerHeight / 2 - 6);

    React.useEffect(() => {
        const mouseMove = e => {
            cursorX.set(e.clientX - props.cursorOffset);
            cursorY.set(e.clientY - props.cursorOffset);
        }

        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, [props.cursorOffset, cursorX, cursorY]);

    let variants = {
        default: {
            backgroundColor: props.darkMode ? '#1a1a1a' : '#f4f4f4'
            //x: mousePosition.x - 6,
            //y: mousePosition.y - 6
        },
        text: { 
            height: 40,
            width: 40,
            backgroundColor: '#f4f4f4',
            mixBlendMode: 'difference'
        },
        project: { 
            height: 144,
            width: 144,
            backgroundColor: props.darkMode ? '#f4f4f4' : '#1a1a1a',
        },
        email: {
            backgroundColor: 'transparent'
        }
    }

    return (
        <motion.div
            id='cursor'
            variants={variants}
            animate={props.cursorVariant}
            style={{
                translateX: cursorX,
                translateY: cursorY
            }}>
            <span id='cursorText'>{props.cursorText}</span>
        </motion.div>
    )
}

export default Cursor;