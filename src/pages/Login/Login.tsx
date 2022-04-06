import React from 'react'
import '../Login/index.css'

export const Login = () => {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <h1>Авторизация</h1>
        </div>
      </div>
      <div className="container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">
              <span>User name</span>
              <input id="name" type="text" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <span>Password</span>
              <input id="password" type="password" />
            </label>
          </div>
          <button className="btn" type="submit">Отправить</button>
        </form>
      </div>
    </>
  )
}
