import React from "react"

import "./header.css"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = () => {

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
                  <div className='logo'>
                      <Link to="/">
                          <h2>ENOCH</h2>
                          </Link>
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
   
        </div>
      </header>
    </>
  )
}
