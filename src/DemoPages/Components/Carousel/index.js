import React, {Fragment} from 'react';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import CarouselBSExample from './Examples/Carousel';

export default class CarouselExample extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Learn About Impersonalization"
                    subheading="We are tring to compare your lifestyle with the human being based on Life Cycle Hypothesis model."
                    icon="pe-7s-album icon-gradient bg-sunny-morning"
                />
                {/* <div className="mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header">
                    <div className="card-header-title fsize-2 text-capitalize font-weight-normal">Learn Aout Personalization</div>
                </div> */}
                <CarouselBSExample/>
            </Fragment>
        );
    }
}