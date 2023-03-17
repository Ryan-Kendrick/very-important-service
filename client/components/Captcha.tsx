import { ChangeEvent, useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

function Captcha() {
  const [state, setState] = useState({
    captcha: '',
    valid: false,
  })

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setState({
      captcha: e.target.value,
      valid: e.target.value === 'ffHychn hrlyTryn',
    })
  }

  return (
    <div className="tos">
      <h2>Very Important Form</h2>
      <div className="form">
        <img className="c-image" src="/images/captcha.png" alt="" />
        <form>
          <div className="formdata">
            <div className="captcha">
              <div className="reCaptcha">
                <label htmlFor="reCaptcha">Type the characters above: </label>
                <input
                  id="reCaptcha"
                  name="reCaptcha"
                  value={state.captcha}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <Link to={state.valid ? '/done' : ''}>
              <button type="submit" className="formButton">
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Captcha
