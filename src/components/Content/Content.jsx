import block from 'bem-cn'
import React from 'react'
import './Content.css'
const b = block('content');
const p = block('paragraf');


export const Content = () => (
  <div className={b()}>
<img className="image" src="https://th.bing.com/th/id/R3cf3dcd5141b6fd1f35fa711c194a4fb?rik=UPBj1tu7Imh5bA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmug_coffee%2fmug_coffee_PNG16843.png&ehk=6EyyZfA9X3LCYvhABm%2ffl2b%2bL9B%2fUGK%2fKCLM1RqMw0E%3d&risl=&pid=ImgRaw" alt="coffee"></img>
            <h4 className={b('h4')}>Renting</h4>
            <div className={p()}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aspernatur, recusandae rerum maiores, fuga inventore expedita
              alias perspiciatis numquam itaque nemo laboriosam optio.
            </div>
            <div className={p()}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aspernatur, recusandae rerum maiores, fuga inventore expedita
              alias perspiciatis numquam itaque nemo laboriosam optio.
            </div>
            <div className={p()}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aspernatur, recusandae rerum maiores, fuga inventore expedita
              alias perspiciatis numquam itaque nemo laboriosam optio.
            </div>

        </div>)
