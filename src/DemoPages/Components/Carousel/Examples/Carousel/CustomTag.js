import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import universityImage from '../../../../../assets/utils/images/university.png';
import accumationImage from '../../../../../assets/utils/images/accumulation.png';
import rapidAccumalationImage from '../../../../../assets/utils/images/rapidAccumalation.png';
import beforeAutumImage from '../../../../../assets/utils/images/beforeAutum.png';
import financialFreedomImage from '../../../../../assets/utils/images/financialFreedom.png';
import fiscalIndependenceImage from '../../../../../assets/utils/images/fiscalIndependence.png';
import sunsetImage from '../../../../../assets/utils/images/sunset.png';
import autumImage from '../../../../../assets/utils/images/Autum.png';


const items = [
    {
        id: 1,
        altText: 'You should pay your own expense, no assests, you are on your own',
        caption: 'Student Stage(18 - 22 years)',
        src: universityImage
    },
    {
        id: 2,
        altText: 'You should establish Financial habits for rest of your lives- use money to save money',
        caption: 'Financial Freedom Stage (21 - 29 years)',
        src: financialFreedomImage
    },
    {
        id: 3,
        altText: 'Your Total Net worth much matche or exceeds annual income',
        caption: 'Accumation Stage (30 - 39 years)',
        src: accumationImage
    },
    {
        id: 4,
        altText: 'Your investments must reaps returns for you.',
        caption: 'Rapid Accumulation Life (40 - 55 years)',
        src: rapidAccumalationImage
    },
    {
        id: 5,
        altText: 'You should be in a position to choose easy career goals or retirement.',
        caption: 'Fiscal Independence Stage(56 - 69 years)',
        src: fiscalIndependenceImage
    },
    {
        id: 6,
        altText: 'You should change portfolio to conservative investments habits',
        caption: 'Conservation Stage(70 - 75 years)',
        src: beforeAutumImage
    },
    {
        id: 7,
        altText: 'You should try to maintain financial  legacy',
        caption: 'Conservation Stage(75+ years)',
        src: autumImage
    },
    {
        id: 8,
        altText: 'You should plan to distribite majority of your investments.',
        caption: 'Last Stages of Life',
        src: sunsetImage
    },
];

class CustomExample extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption className="text-danger" captionText={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default CustomExample;