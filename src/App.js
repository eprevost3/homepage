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
            lang : this.readCookie()["language"] || 'fr'
        }
    }

    // changes the langage used
    changeLangage = () => {
        var lang =  this.state.lang === 'fr' ? 'us' : 'fr'
        this.setState({
            lang : lang,
        })
    }

    // read cookies we are using to customize the website
    readCookie(){
        var cookies = {"language" : ""}

        var cooks = document.cookie
        // parse result
        cooks = cooks.split(";")

        // find langage and best score
        for (var k = 0; k < cooks.length; k++){
            var str = cooks[k].replace(/\s/g, '')

            if(str.substring(0, 8) === "language"){cookies.language = str.split("=")[1]}
            else{}
        }
        return(cookies)
    }
    // set the value of the cookies
    setValueCookie(dicCookies){
        // the input dictionnary contains the values of the cookies
        var keys = Object.keys(dicCookies)
        var date = new Date()
        date.setTime(date.getTime() + (365*24*60*60*1000));

        // cookie duration : one year
        var expires = "expires="+ date.toUTCString();

        keys.forEach((key, idx) => {document.cookie = key + "=" + dicCookies[key] + ";" + expires + ";path=/;"})
    }

    // update  cookies value
    udpdateCookies(cookies){this.setValueCookie(cookies)}

    render(){
        const lang = this.state.lang

        // updating cookie value (language)
        this.udpdateCookies({language : lang})

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
                      <a href='/mastermindApp' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['mastermind']}
                      </a>
                      <a href='/pendu' className='homeButton' title = {translations[lang]['title']}>
                            {translations[lang]['hangMan']}
                      </a>
                  </div>
              </div>

              <div id='bottom'>
                  <a href="https://fr.freepik.com/photos-vecteurs-libre/fond">{translations[lang]["credit"]}</a>
              </div>

          </div>


        )
    }

}


export default Home;
