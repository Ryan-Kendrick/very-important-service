import { ChangeEvent, useState, FormEvent } from 'react'

interface Form {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: number
  password: string
  reenterPassword: string
}

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: 0,
    password: '',
    reenterPassword: '',
  })

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      [e.target.name]: e.target.value,
      ...formData,
    })
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="tos">
      <h2>Very Important Form</h2>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="name">
            <div className="firstName">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={changeHandler}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="company">
            <label htmlFor="company">Company:</label>
            <input
              id="company"
              name="company"
              value={formData.company}
              onChange={changeHandler}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email address:</label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number:</label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
              type="number"
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
            <div className="reenterPassword">
              <label htmlFor="reenterPassword">Reenter password:</label>
              <input
                id="reenterPassword"
                name="reenterPassword"
                value={formData.reenterPassword}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="formButton">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
