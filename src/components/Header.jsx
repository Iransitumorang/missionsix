import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    // ...
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <div className="dropdown">
            <Link className="navbar-brand" data-bs-toggle="dropdown" role="button" aria-expanded="false">
              <img src={logo} alt="videobelajar" height="30" />
            </Link>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={handleLogout}>Keluar</button></li>
            </ul>
          </div>
          
          <div className="d-flex align-items-center">
            <div className="dropdown me-3">
              <a className="text-dark text-decoration-none" href="#" role="button" data-bs-toggle="dropdown">
                Kategori
              </a>
            </div>
            
            <div className="dropdown">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60" 
                alt="Profile" 
                className="rounded-circle" 
                width="32" 
                height="32"
                role="button"
                data-bs-toggle="dropdown"
              />
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/profil">Profil Saya</Link></li>
                <li><Link className="dropdown-item" to="/kelas">Kelas Saya</Link></li>
                <li><Link className="dropdown-item" to="/pesanan">Pesanan Saya</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Keluar</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header; 