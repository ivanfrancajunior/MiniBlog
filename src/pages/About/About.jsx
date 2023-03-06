import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h1>Sobre O Mini<span >Blog</span></h1>
        <p>Este projeto consiste em um blog feito em React e Firebase.</p>
        <Link to='/posts/create' className='btn'> Criar Post</Link>
    </div>
  )
}

export default About