import React from 'react';
import RatingCounter from './ratingcounter';

export default class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
            ? state.counts[name] += 1
            : state.counts[name] = 1;

            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }

            return state;
        })
    }
    

    render() {
        return (
            <div>
                <h2>{this.state.highestCountName}</h2>
                <RatingCounter 
                name="5★" 
                count={this.state.counts.five}
                onClick={this.countClicks}
                />
                <RatingCounter 
                name="4★" 
                count={this.state.counts.four}
                onClick={this.countClicks}
                />
                <RatingCounter 
                name="3★" 
                count={this.state.counts.three}
                onClick={this.countClicks}
                />
                <RatingCounter 
                name="2★" 
                count={this.state.counts.two}
                onClick={this.countClicks}
                />
                <RatingCounter 
                name="1★" 
                count={this.state.counts.one}
                onClick={this.countClicks}
                />
            </div>
        );
    }
}