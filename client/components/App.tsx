function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="navButtons">
            <button className="navButton button-5" role="button">LOG IN</button>
            <button className="navButton">SIGN UP</button>
          </div>
        </nav>
        <a className="logo" href="/"><img src="/images/logo.svg" alt="" /></a>
      </header>
      <div className="info">
        <div className="words">
          <h1>Very Important Service:</h1>
          <p>React Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic excepturi tempora fuga molestiae sed veritatis consectetur animi corporis voluptas explicabo quae odit, aspernatur itaque natus doloremque omnis cum praesentium! has begun!</p>
          <button>SIGN UP NOW!</button>

        </div>
        <img className="manImage"src="/images/illustration.png" alt="" />
      </div>
    </>
  )
}

export default App
