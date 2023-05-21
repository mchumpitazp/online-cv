import React from 'react';
import $ from 'jquery';

function Intro (props) {

    React.useEffect(() => {
        setTimeout(() => {
            $('.letter-wrap__word').addClass('hover');
        }, 500);
        setTimeout(() => {
            $('.letter-wrap__word').addClass('animate');
        }, 1700);
        setTimeout(() => {
            props.unmount();
        }, 2000);
    }, [props]);

    return (
        <div id='intro'>
            <span className='letter-wrap__word' style={{fontSize: '3rem'}}>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="M">M</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="a"
                    style={{'transitionDelay': '20ms'}}>a</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="u"
                    style={{'transitionDelay': '40ms'}}>u</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="r"
                    style={{'transitionDelay': '60ms'}}>r</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="o"
                    style={{'transitionDelay': '80ms'}}>o</span>
                </span>
                &nbsp;
                &nbsp;
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="P"
                    style={{'transitionDelay': '0ms'}}>P</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="o"
                    style={{'transitionDelay': '20ms'}}>o</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="l"
                    style={{'transitionDelay': '40ms'}}>l</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="i"
                    style={{'transitionDelay': '60ms'}}>i</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="n"
                    style={{'transitionDelay': '80ms'}}>n</span>
                </span>
                <span className='letter-wrap__char'>
                    <span className='letter-wrap__char-inner' data-letter="o"
                    style={{'transitionDelay': '100ms'}}>o</span>
                </span>
            </span>
        </div>
    );
}

export default Intro;