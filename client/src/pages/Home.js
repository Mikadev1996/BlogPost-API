import React from 'react';
import Nav from "../components/Nav";
// eslint-disable-next-line
import HomeCss from '../components/styles/Home.css';
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
    }

  return (
      <div className='app'>
          <Nav />
          <main className='home-content'>
              <div className='content-left'>
                  <h1 style={titleFont}>Welcome</h1>
                  <p style={titleFont}>Mika's First FullStack Development using MERN: MongoDB, Express.js, React, Node.js</p>
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