import { Link } from 'react-router-dom';
import './Menu.scss';

export default function Menu () { 
    return ( 
<nav className='menu'>
    <Link to='/'><img src='./src/assets/logo.png' alt="logo" className='logo'/></Link>
<ul>
    <Link to='/slider'><li>Word cards</li></Link>
</ul>
</nav>
    )
}