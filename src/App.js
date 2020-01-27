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
                      <a href='/pendu' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['hangMan']}
                      </a>
                      <a href='./' className='homeButton' title = {translations[lang]['title']} onClick = {() => {alert("Pas encore implémenté !");}}>
                            {translations[lang]['connectFour']}
                      </a>
                      <a href='/tourHanoi' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['hanoi']}
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
