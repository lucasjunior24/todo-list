import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav className='navbar navbar-dark bg-dark'>
           <div className='navbar-header'>
                <Link className='navbar-brand' to='/'>
                    <i className='fa fa-calendar-check-o'> TodoApp</i>  
                </Link>
            </div>  
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link navbar-brand'>Tarefas</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-link navbar-brand'>Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}
  
export default Menu;
