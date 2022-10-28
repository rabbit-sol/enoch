import React from "react"
import { Link } from "react-router-dom"

import "./home.css"
import { blog } from "../../assets/data/data"
import banner from "../../assets/images/mint-banner01.mp4"

export const Home = () => {
    return (
        <>
           
            
            <video className='videoTag' autoPlay loop muted>

                <h3>dtfguhjliksd;rfgih</h3>
                <source src={banner} type='video/mp4' />
            </video>
                <section className='blog'>
                 <div className='container grid3'>
                    {blog.map((item) => (
                        <Link to={`/details/${item.id}`} className='link'>
                            <div className='box boxItems' key={item.id}>
                                <div className='img'>
                                    <img src={item.cover} alt='' />
                                </div>
                                <div className='details'>
                                   

                                    <h3>{item.title}</h3>


                                   
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}
