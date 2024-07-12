import './Page404.scss';
import { Link } from 'react-router-dom';


export default function Page404() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>Error 404</h1>
        <p>Sorry, we don't have that page, but we have others.</p>
        <Link to="/"> 
          <button>Bring me to home</button>
        </Link>
      </div>
    </div>
  );
  }
  
  