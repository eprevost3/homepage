// deploy on github pages https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d

import React from 'react'
import Header from './components/header/Header'
import './App.css'
import translations from './components/lang/translations'

// <>
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lang : 'fr'
        }
    }

    // changes the langage used
    changeLangage = () => {
        var lang =  this.state.lang === 'fr' ? 'us' : 'fr'
        this.setState({
            lang : lang,
        })
    }

    render(){
        const lang = this.state.lang
        return(
          <div id='home'>
              <Header lang = {this.state.lang} changeLangage = {this.changeLangage}/>


              <div id='middle'>
                  <div id='links'>
                      <a href='/snakeSimplifie' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['snakeSimplified']}
                      </a>
                      <a href='/tourHanoi' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['hanoi']}
                      </a>
                      <a href='/bounce' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['bounce']}
                      </a>
                      <a href='/pendu' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['hangMan']}
                      </a>
                  </div>
              </div>

              <div id='bottom'>
              </div>

          </div>


        )
    }

}


export default Home;
