import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'


export const Home = () => {
    return (
        <>
            <nav className="navbar">
                <Link to='/'>
                    <div className="logo-container">
                        <img className="logo" src="./logo.png" alt="Logo" />
                    </div>
                </Link>
                <div className="search-container">
                    <input className="search-input" type="text" placeholder="Pronađi takmičenje" />
                    <button className="search-button">Pretraži</button>
                </div>
            </nav>

            <div className="card-container">
                <Link to='/prva'>
                    <div className="card">
                        <h1 className="title">Kartica 1</h1>
                        <p>66. Festival muzičkih i baletskih škola Srbije, B.Palanka 2023. ZMBŠS</p>
                    </div>
                </Link>
                <Link to='/druga'>
                    <div className="card">
                        <h1 className="title">Kartica 2</h1>
                        <p>Republičko takmičenje muzičkih škola Srbije 2022. ZMBŠS</p>
                    </div>
                </Link>
                <Link to='/treca'>
                    <div className="card">
                        <h1 className="title">Kartica 3</h1>
                        <p>Republičko takmičenje muzičkih i baletskih škola 2021. ZMBŠS</p>
                    </div>
                </Link>
                <Link to='/cetvrta'>
                    <div className="card">
                        <h1 className="title">Kartica 4</h1>
                        <p>64. Festival muzičkih i baletskih škola Srbije, Vršac 2021. ZMBŠS</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
