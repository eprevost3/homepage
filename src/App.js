// deploy on github pages https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d

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
                <div to='/pendu' className='homeButton'>
                      <div id="pendu">Pendu</div>
                </div>
                <div to='/puissance_4' className='homeButton'>
                    <div id="puissance_4">Puissance 4</div>
                </div>
                <div to='/rien' className='homeButton'>
                    <div id="rien">Rien</div>
                </div>
            </div>
        </div>

        <div id='bottom'>
        </div>

    </div>


  )
}

export default Home;
