import React from 'react';
import ReviewForm from './reviewform';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
        }
    }

    listReviews = [];


    render() {
        //let tempReviews = this.state.reviews;

       


        return(
            <div className='card-body'>
                    Reviews: {this.state.reviews}
                    {this.listReviews};
                    <br></br>
                    <ReviewForm />
            </div>
        );
    }
};