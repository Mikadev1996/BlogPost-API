import React from 'react';
import Nav from "./Nav";
// eslint-disable-next-line
import HomeCss from './styles/Home.css';
import WebFont from "webfontloader";

function Home() {
    WebFont.load({
        custom: {
            families: ['Voga-Medium'],
            urls:['./fonts/Voga-Medium.otf']
        }
    })

    const titleFont = {
        fontFamily: "Voga-Medium",
        fontSize: "28px"
    }

  return (
      <div className='app'>
          <Nav />
          <main className='content'>
              <div className='content-left'>
                  <h1 style={titleFont}><strong>Home</strong></h1>
              </div>

              <div className="content-right">
                  <div id="home-image">

                  </div>
              </div>
          </main>
      </div>
  )
}

export default Home;