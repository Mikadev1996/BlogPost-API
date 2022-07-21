import React from 'react';
import Nav from "./Nav";
// eslint-disable-next-line
import HomeCss from './styles/Home.css';

function Home() {
  return (
      <div className='app'>
          <Nav />
          <main className='content'>
              <h1>Home</h1>
              <p>Hello</p>
          </main>
      </div>
  )
}

export default Home;