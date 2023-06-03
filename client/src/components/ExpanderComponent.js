import React from "react";
import { motion } from "framer-motion";
import $ from 'jquery';

function Expander ({ toAll }) {
    const [rotation, setRotation] = React.useState(false);
    const myRef = React.useRef();

    React.useEffect(() => {
        $(myRef.current).on('click', function (e, {isExpanded, parent}) {
            if (isExpanded) {
                setRotation(!rotation);
                $(parent).removeClass('expanded');
            } else {
                setRotation(!rotation);
                $(parent).addClass('expanded'); 

                $('.portfolio-list__projects-item').each(function (index, item) {
                    if ($(item).hasClass('expanded')) {
                        $(item).find('.expander').trigger('click', {isExpanded: true, parent: item});
                    }
                });
            }
        });
    }, [rotation]);

    return (
        <motion.div
            ref={myRef}
            className="expander"
            animate={{
                rotate: rotation? -135 : 0
            }}
            transition={{ type: "tween", ease: "easeIn", duration: 0.4, delay: 0.2 }}
        >
            +
        </motion.div> 
    )
}

export default Expander;