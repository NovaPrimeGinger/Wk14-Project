import React from 'react';
import Rating from './rating';
import ReviewForm from './reviewform';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            poster: props.poster,
            synopsis: props.synopsis,
            released: props.released,
            reviews: props.reviews,
            content: props.content
        }
    }

    render() {
        //let tempReviews = this.state.reviews;

        let reviews;

        return(
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                Movie
                </div>
                <div className='card-body'>
                    Title: {this.state.title}<br></br>
                    Poster: {this.state.poster}<br></br>
                    Synopsis: {this.state.synopsis}<br></br>
                    Released: {this.state.released}<br></br>
                    {/* {this.state.content} */}
                </div>
                <div className='card-footer'>
                    <Rating />
                    {/* <ReviewList /> */}
                </div>
            </div>
        )
    }
};