import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Review extends React.Component {

    listReviews = [];

    handleClick() {
        this.listReviews.push()
    }

    render () {
        return (
            <div className='container'>
                <form>
                    <label>Tell Us What You Thought:</label><br></br>
                    <input className='form-control' id='inputdefault' type='text' placeholder='Leave Your Review Here'/>
                    <button onCLick={this.handleClick} id="add" class="btn btn-primary form-control">Submit</button>
                </form>
            </div>
        )
    };
}
