import block from 'bem-cn'
import React from 'react'
import './Content.css'
const b = block('content')


export const Content = () => (
  <section className={b()}>


            <h4 className={b('h4')}>Renting</h4>
            <p className={b('paragraf')}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aspernatur, recusandae rerum maiores, fuga inventore expedita
              alias perspiciatis numquam itaque nemo laboriosam optio.
            </p>

        </section>)
