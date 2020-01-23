import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'


// <>
const Home = function(){
  return(
    <div id='home'>
        <div id='header'>
        </div>


        <div id='middle'>
            <div id='links'>
                <Link to='/pendu' className='homeButton'>
                      <div id="pendu">Pendu</div>
                </Link>
                <Link to='/puissance_4' className='homeButton'>
                    <div id="puissance_4">Puissance 4</div>
                </Link>
                <Link to='/rien' className='homeButton'>
                    <div id="rien">Rien</div>
                </Link>
            </div>
        </div>

        <div id='bottom'>
        </div>

    </div>


  )
}

export default Home;
