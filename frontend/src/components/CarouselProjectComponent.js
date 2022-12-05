import React from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function CarouselProject(props) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
        
    const items = []
    props.project.images.map((imgUrl, index) => {
        items.push({
            key: index,
            src: baseUrl + imgUrl,
            alt: props.project.name + index
        });
    });

    const next = () => {
        if (animating) return;
        const nextIndex = (activeIndex === items.length - 1) ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const previousIndex = (activeIndex === 0) ? items.length - 1 : activeIndex - 1;
        setActiveIndex(previousIndex);
    };

    const slides = items.map((item) => {
        return(
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >   
                <div className='carousel-img-container'>
                    <img className='d-block w-100' src={item.src} alt={item.alt} />
                </div>
            </CarouselItem>
        )
    });

    return(
        <div>
            <Carousel dark
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                ride={'carousel'}
                interval={3000}
            >
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    )
}

export default CarouselProject;