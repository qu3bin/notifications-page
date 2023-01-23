import React from 'react'
import avatar1 from './assets/avatar1.webp'
import avatar2 from './assets/avatar2.webp'
import avatar3 from './assets/avatar3.webp'
import avatar4 from './assets/avatar4.webp'
import avatar5 from './assets/avatar5.webp'
import avatar6 from './assets/avatar6.webp'
import avatar7 from './assets/avatar7.webp'
import imgChess from './assets/image-chess.webp'
import './App.css'

function App() {

  const readAll = () => {

    let unread = document.querySelectorAll(".unread");
    let read = document.querySelectorAll(".dot");

    document.querySelector(".header-number").setAttribute("style", "display:none");

    for (let i = 0; i < unread.length; i++) {
      unread[i].classList.remove("unread");
    }
    for (let i = 0; i < read.length; i++) {
      read[i].classList.remove("dot");
    }
    
  }

  return (
    <main className="App">

      <header className="header-notifications">
        <h1 className="header-title">Notifications <span className="header-number">3</span></h1>
        <a className="marked" onClick={readAll}>Mark all as read</a>
      </header>

      <article className="notification unread">
        <img className="avatar" src={avatar1} alt="" />
        <div>
          <h2 className="detail dot"><span className="user">Mark Webber</span> reacted to your recent post <a className="link">My first tournament today!</a></h2>
          <p className="ago">1m ago</p>
        </div>
      </article>

      <article className="notification unread">
        <img className="avatar" src={avatar2} alt="" />
        <div>
          <h2 className="detail dot"><span className="user">Angela Gray</span> followed you</h2>
          <p className="ago">5m ago</p>
        </div>
      </article>

      <article className="notification unread">
        <img className="avatar" src={avatar3} alt="" />
        <div>
          <h2 className="detail dot"><span className="user">Jacob Thompson</span> has joined your group <a className="link">Chess Club</a></h2>
          <p className="ago">1 day ago</p>
        </div>
      </article>

      <article className="notification">
        <img className="avatar" src={avatar4} alt="" />
        <div>
          <h2 className="detail"><span className="user">Rizky Hasanuddin</span> sent you a private message</h2>
          <p className="ago">5 days ago</p>
          <p className="msg">Hello, thanks for setting up the Chess Club. 
          I've been a member for a few weeks now and I'm 
          already having lots of fun and improving my game.</p>
        </div>
      </article>

      <article className="notification justify">
        <img className="avatar" src={avatar5} alt="" />
        <div>
          <h2 className="detail"><span className="user">Kimberly Smith</span> commented on your picture</h2>
          <p className="ago">1 week ago</p>
        </div>
        <div className="pic-container">
          <img className="pic" src={imgChess} alt="" />
        </div>
      </article>

      <article className="notification">
        <img className="avatar" src={avatar6} alt="" />
        <div>
          <h2 className="detail"><span className="user">Nathan Peterson</span> reacted to your recent post <a className="link">5 end-game strategies to increase your win rate</a></h2>
          <p className="ago">2 weeks ago</p>
        </div>
      </article>

      <article className="notification">
        <img className="avatar" src={avatar7} alt="" />
        <div>
          <h2 className="detail"><span className="user">Anna Kim</span> left the group <a className="link">Chess Club</a></h2>
          <p className="ago">2 weeks ago</p>
        </div>
      </article>
    </main>
  )
}

export default App
