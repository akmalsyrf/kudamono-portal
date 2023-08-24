import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { themeChange } from 'theme-change'

export default function Navbar() {
  const [currentTheme, setCurrentTheme] = useState(null)

  useEffect(() => {
    themeChange(false)
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setCurrentTheme('dark')
      } else {
        setCurrentTheme('light')
      }
    }
  }, [])
  return (
    <nav className="backdrop-filter backdrop-blur-lg">
      <div className="navbar flex px-8">
        <div className="flex-1">
          <a className="normal-case text-xl">KUDAMONO TRAVEL</a>
        </div>
        <div className="flex-none">
          <h3 className="mr-5"><a href="">Home</a></h3>
          <h3 className="mr-5"><a href="">About Us</a></h3>
          <h3 className="mr-5"><a href="">Contact Us</a></h3>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="swap swap-rotate mr-6">
              <input type="checkbox" />
              <HiSun
                data-set-theme="light"
                className={
                  'fill-current w-5 h-5 ' +
                  (currentTheme === 'dark' ? 'swap-on' : 'swap-off')
                }
              />
              <HiMoon
                data-set-theme="dark"
                className={
                  'fill-current w-5 h-5 ' +
                  (currentTheme === 'light' ? 'swap-on' : 'swap-off')
                }
              />
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}
