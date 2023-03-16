import { Link } from 'react-router-dom'

function ToS() {
  return (
    <div className="tos">
      <div className="terms">
        <ol>
          <li>
            We reserve the right to collect your data, then sell it to third
            parties. Since we’re allowing you to use our site for free, it's
            only fair, right?
          </li>
          <li>
            Your collected data will also be used for targeted advertisements.
            Remember that thing you looked at on Amazon last week? No? Well
            here’s a reminder on a sidebar ad.
          </li>
          <li>
            Though we don’t have unauthorized access to your microphone or
            camera, you will somehow get advertisements for things that you have
            only mentioned in person, not on your phone or computer, we swear
            it's just a coincidence though…
          </li>
          <li>
            Upload, any pictures to our site? Thanks, they’re ours now, we can
            legally sell them and use them for advertisements, we probably
            won’t, but we can.
          </li>
          <li>
            Haven’t made an account on our app yet? Don’t worry, we will use the
            information we’ve collected about you and make one for you.
          </li>
          <li>
            Though we spend more money than you'll ever make in your life on
            cybersecurity, your information will probably be stolen in a data
            breach, just accept it and move on.
          </li>
          <li>
            We reserve the right to delete your account for no reason, despite
            allowing neo-nazis to post hate speech without repercussion. While
            you may request a review, the approximate wait time is currently 99
            years.
          </li>
        </ol>
      </div>
      <Link to="/form">Agree</Link>
      <Link to="/">Reject</Link>
    </div>
  )
}

export default ToS
