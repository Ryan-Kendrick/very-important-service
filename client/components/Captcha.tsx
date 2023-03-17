import { ChangeEvent, useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

function Captcha () {
  const [formData, setFormData] = useState({
    captcha: '',
  }) 

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="tos">
      <h2>Very Important Form</h2>
      <div className="form">
        <img className='c-image' src="/images/captcha.png" alt="" />
        <form onSubmit={submitHandler}>
          <div className="formdata">
            <div className="captcha">
              <div className="reCaptcha">
                <label htmlFor="reCaptcha">Type the characters above: </label>
                <input
                  id="reCaptcha"
                  name="reCaptcha"
                  value={formData.captcha}
                  onChange={changeHandler}
                />
              </div> 
            </div>
        </div>
        <div className="form-buttons">
        {/* <Link
          to={read ? '/form' : ''}
          className={read ? 'enabled' : 'disabled'}
        > */}
            <button type="submit" className="formButton">
            Next
            </button>
        {/* </Link> */}
        </div>
        </form>
      </div>
    </div>
  )
}

export default Captcha