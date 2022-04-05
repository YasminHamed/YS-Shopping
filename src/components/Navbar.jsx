import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav class="navbar navbarr navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="/">YS Collection</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                            <li class="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>  
                        </ul>

                       <div className='buttons'>
                           <button className='btn' > 
                            <NavLink to="/login" className='btn btn-outline-dark'>
                                <i className='fa fa-sign-in me-1'></i> Login</NavLink>
                           </button>
                           <button className='btn' > 
                            <NavLink to="/cart" className='btn btn-outline-dark'>
                                <i className='fa fa-shopping-cart me-1'></i> Cart ({state.length})</NavLink>
                           </button>
                       </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
