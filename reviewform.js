import React from 'react';
import Review from './review';

export default class ReviewForm extends React.Component {
    render () {
        return (
            <div className='App block-example border border-dark'>
                <h4 className='App-link'>Leave A Review</h4>
                <Review/>
            </div>
        );
    }
}