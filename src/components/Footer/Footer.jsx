import React from 'react'
import block from 'bem-cn'
import './Footer.css'

const f = block('footer')
const l = block('links')

export const Footer = () => (
  <footer className={f()}>

          <div className={f('h3')}>Explore luxestate </div>
          <input className={f('search')} type="text" placeholder="Subscribe To Our Newletter" />


          <div className={l()}>
            <p>luxestate</p>
            <a className={l('link')} href="#">Agents</a>
            <a className={l('link')} href="#">Hunters</a>
          </div>

          <div className={l()}>
            <p>luxestate</p>
            <a className={l('link')} href="#">Agents</a>
            <a className={l('link')} href="#">Hunters</a>
          </div>



  </footer>

)
