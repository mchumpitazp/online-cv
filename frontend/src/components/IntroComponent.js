import React from 'react';

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.intro = React.createRef();
        this.title = React.createRef();
        this.subtitle = React.createRef();
    }

    async componentDidMount() {
        await this.initTitle();
        await this.initSubtitle();
        await this.unmountIntro();
    }

    async initTitle() {
        const uppers = this.title.current.querySelectorAll('.upper');
        const lowers = this.title.current.querySelectorAll('.lower');
        let prob = 0.5;
        var op = 0;

        await new Promise((resolve) => setTimeout(() => {
            uppers.forEach((upper) => upper.style.visibility = 'visible');
            resolve();
        }, 500));

        for (let i = 0; i < 10; i++) {
            await new Promise((resolve) => setTimeout(() => {
                lowers.forEach((lower) => {
                    if (prob > Math.random())
                        lower.style.visibility = 'visible';
                });
                resolve();
            }, 20));

            await new Promise((resolve) => setTimeout(() => {
                lowers.forEach((lower) => {
                    lower.style.visibility = 'hidden';
                });
                resolve();
            }, 100));

            if (0.8 < Math.random()) {
                await new Promise((resolve) => setTimeout(() => {
                    resolve();
                }, 500));
            }

            prob += 0.03;
        }

        await new Promise((resolve) => setTimeout(() => {
            lowers.forEach((lower) => {
                lower.style.opacity = 0;
                lower.style.visibility = 'visible';
            });
            resolve();
        }, 300));

        for (let i = 0; i < 35; i++) {
            op = (op + 0.03 >= 1) ? 1 : op + 0.03;

            await new Promise((resolve) => setTimeout(() => {
                lowers.forEach((lower) => lower.style.opacity = op);
                resolve();
            }, 60));
        }
    }

    async initSubtitle() {
        const cursor  = this.subtitle.current.querySelector('#subtitle-cursor');
        const text    = this.subtitle.current.querySelector('#subtitle-text');
        const textStr = "SOFTWARE DEVELOPER"

        for (let i = 0; i < 3; i++) {
            await new Promise((resolve) => setTimeout(() => {
                cursor.style.visibility = 'hidden';
                resolve();
            }, 500));
    
            await new Promise((resolve) => setTimeout(() => {
                cursor.style.visibility = 'visible';
                resolve();
            }, 500));
        }

        await new Promise((resolve) => setTimeout(() => {
            resolve();
        }, 500));

        for (let i = 0; i < textStr.length; i++) {
            await new Promise((resolve) => setTimeout(() => {
                text.innerHTML += textStr.charAt(i);
                resolve();
            }, 70));
        }
    }

    async unmountIntro() {
        await new Promise((resolve) => setTimeout(() => {
            this.intro.current.style.animationPlayState = 'running';
            resolve();
        }, 400));

        await new Promise((resolve) => setTimeout(() => {
            this.props.unmount();
            resolve();
        }, 300));
    }
    
    render() {
        return(
            <div ref={this.intro} id='intro'>
                <div ref={this.title} id='intro-title' className='d-flex'>
                    <span className='upper'>M</span>
                    <span className='lower'>a</span>
                    <span className='lower'>u</span>
                    <span className='lower'>r</span>
                    <span className='lower'>o</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className='upper'>P</span>
                    <span className='lower'>o</span>
                    <span className='lower'>l</span>
                    <span className='lower'>i</span>
                    <span className='lower'>n</span>
                    <span className='lower'>o</span>
                </div>

                <div ref={this.subtitle} id="intro-subtitle" className="d-flex">
                    <span id="subtitle-text"></span>
                    <span id="subtitle-cursor">|</span>
                </div>
            </div>
        );
    }
    
}

export default Intro;