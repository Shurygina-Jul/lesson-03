/* eslint-disable jsx-a11y/anchor-is-valid */
import block from 'bem-cn'
import React from 'react'
import './Header.css'

const b = block('header')
const n = block('navbar')


export const Header = () => (
  <header className={b()}>
    <span className={b('title')}>
     Luxestage
    </span>
    <span className={n()}>
      <a className={n('link')} href="#">About</a>
      <a className={n('link')}href="#">How it work</a>
      <a className={n('link')}href="#">Agents</a>
      <a className={n('link')} href="#">Getting Started</a>
    </span>
  </header>
)

