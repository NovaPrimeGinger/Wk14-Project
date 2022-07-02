import React from 'react';
import Movie from'./movie';
import ReviewList from './reviewlist';


export default class MovieList extends React.Component {
    render() {
        
        return (
            <div className='container'>
                <Movie {...{
                    title: 'Avengers',
                    poster: <img height='200px' src='https://www.joblo.com/wp-content/uploads/2012/02/02_AVG_Online1Sht_UK2_rgb-1.jpg' alt='Avengers (2012) Poster'/>,
                    synopsis: 'Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
                    released: 'May 4, 2012',
                    }}/>
                <ReviewList {...{
                    reviews: 'Avengers is the perfect, classic superhero movie. It is the standard!'
                }}/>
                <Movie {...{
                    title: 'Avengers: Age of Ultron',
                    poster: <img height='200px' src='https://www.themoviedb.org/t/p/original/tTzs0sigsjYotvnlSz2FYq0tx6M.jpg' alt='Avengers Age Of Ultron Poster'/>,
                    synopsis: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and its up to Earths mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
                    released: 'May 1, 2015',
                }}/>
                <ReviewList {...{
                    reviews: 'Age of Ultron felt a little lacking, but I loved Wanda!'
                }}/>
                <Movie {...{
                    title: 'Avengers: Infinity War',
                    poster: <img height='200px' src='http://media.comicbook.com/2018/03/avengers-infinity-war-poster-1093756.jpeg' alt='Avengers Infinity War Poster'/>,
                    synopsis: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
                    released: 'April 23, 2018',
                }}/>
                <ReviewList {...{
                    reviews: 'OH MY GOD WHAT JUST HAPPENED!?!?!?!?'
                }}/>
                <Movie {...{
                    title: 'Avengers: Endgame',
                    poster: <img height='200px' src='https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp' alt='Avengers Endgame Poster'/>,
                    synopsis: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse the actions of Thanos and restore balance to the universe.',
                    released: 'April 26, 2019',
                }}/>
                <ReviewList {...{
                    reviews: 'AVENGERS ASSEMBLE!!! BEST MOVIE EVER!!!!'
                }}/>
            </div>
        )
    }
}