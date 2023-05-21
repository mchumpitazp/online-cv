import React from "react";
import { motion, useMotionValue } from "framer-motion";

function Cursor (props) {
    const cursorX = useMotionValue(window.innerWidth / 2 - 6);
    const cursorY = useMotionValue(window.innerHeight / 2 - 6);

    React.useEffect(() => {
        function isTouchDevice() {
            return (('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0) ||
               (navigator.msMaxTouchPoints > 0));
        }

        if (isTouchDevice()) { 
            document.getElementById('cursor').style.display = 'none';
        } else {
            const mouseMove = e => {
                cursorX.set(e.clientX - props.cursorOffset);
                cursorY.set(e.clientY - props.cursorOffset);
            }

            window.addEventListener('mousemove', mouseMove);
            return () => window.removeEventListener('mousemove', mouseMove);
        }
    }, [props.cursorOffset, cursorX, cursorY]);

    const variants = {
        default: {
            //x: mousePosition.x - 6,
            //y: mousePosition.y - 6
        },
        text: { 
            height: 40,
            width: 40,
            mixBlendMode: 'difference'
        },
        project: { 
            height: 144,
            width: 144,
            backgroundColor: '#1a1a1a',
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