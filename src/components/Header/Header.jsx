import block from 'bem-cn'
import React from 'react'
import './Header.css'

const b = block('header')

/**export const Header = () => (
  <header className={b()}>
    <span className={b('title')}>
      Application title
    </span>
  </header>
)*/
export const Header = () => (
  <header className={b()}>
   <ul className={b('items')}>
<li>About</li>
<li>Aparment</li>
<li>How it Work</li>
<li>Agents</li>
<li>Contact</li>
<li>Join Us</li>
<li>Getting Started</li>
      </ul>
  </header>
)
/**<header>
<nav>
<input type="checkbox" id="checkbox-menu" />
<label for="checkbox-menu">
  <ul class="menu touch">
    <li><a class="logo" href="#">luxestate</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Apartment</a></li>
    <li><a href="#">How it Work</a></li>
    <li><a href="#">Agents</a></li>
    <li><a class="contacts" href="#">Contact Us</a></li>
    <li><a href="#">Join Us</a></li>
    <li><a href="#">Getting Started</a></li>
  </ul>
  <span class="toggle">☰</span>
</label>
</nav>
</header>*/
