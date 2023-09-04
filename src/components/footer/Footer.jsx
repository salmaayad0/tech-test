import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <section className="container-fluid mt-2 bg-light">
      <div className="py-2 px-5 row d-flex justify-content-around">
        <div className="flex-column col-12 col-lg-6">
        <span className="text-primary">Our vision: </span>
          <span>
            Lorem ipsum dolor sit. <br />
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className="flex-column col-12 col-lg-6">
          <span className="text-primary">Information: </span>
          <span className="text-secondary">Lorem ipsum dolor sit.</span>
        </div>
        
      </div>
      <div className={`text-center `+style.menu}>
            <span> Property </span>
            <span> Services </span>
            <span> Product </span>
            <span> About Us </span>
          </div>
    </section>
  )
}

export default Footer