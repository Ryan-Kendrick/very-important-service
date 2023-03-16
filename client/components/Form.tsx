import { ChangeEvent, useState, FormEvent } from 'react'

function Form() {
  function changeHandler() {}

  function submitHandler(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <>
      <h1>Presents for Kelly</h1>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="name">
            <div className="firstName">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                name="firstName"
                value=""
                onChange={changeHandler}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                name="lastName"
                value=""
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="company">
            <label htmlFor="company">Company:</label>
            <input
              id="company"
              name="company"
              value=""
              onChange={changeHandler}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email address:</label>
            <input id="email" name="email" value="" onChange={changeHandler} />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number:</label>
            <input
              id="phone"
              name="phone"
              value=""
              onChange={changeHandler}
              type="number"
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              value=""
              onChange={changeHandler}
            />
            <div className="reenterPassword">
              <label htmlFor="reenterPassword">Reenter password:</label>
              <input
                id="reenterPassword"
                name="reenterPassword"
                value=""
                onChange={changeHandler}
              />
            </div>
          </div>
          <button type="submit" className="formButton">
            Sign Up
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
