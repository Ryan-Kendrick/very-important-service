import { Link } from 'react-router-dom'

function Splash() {
  return (
    <div className="info">
      <div className="words">
        <h1>Very Important Service:</h1>
        <p>
          React Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic
          excepturi tempora fuga molestiae sed veritatis consectetur animi
          corporis voluptas explicabo quae odit, aspernatur itaque natus
          doloremque omnis cum praesentium! has begun!
        </p>
        <Link to="/tos">
          <button>SIGN UP NOW!</button>
        </Link>
      </div>
      <img className="manImage" src="/images/illustration.png" alt="" />
    </div>
  )
}

export default Splash
