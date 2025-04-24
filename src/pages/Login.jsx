import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/auth.css';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: 'situmorangiran@gmail.com',
    password: 'videobelajar123'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    navigate('/home');
  };

  return (
    <div className="auth-page d-flex align-items-center py-5">
      <div className="container">
        <div className="auth-card">
          <div className="card">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img src={logo} alt="Logo" height="40" className="auth-logo" />
                <h4 className="auth-title">Masuk ke Akun</h4>
                <p className="auth-subtitle mb-4">Yuk, lanjutin belajarmu di videobelajar</p>
              </div>

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div>
                  <label htmlFor="email" className="form-label required-field">E-Mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="form-label required-field">Kata Sandi</label>
                  <div className="password-field">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                    </button>
                  </div>
                  <div className="text-end mt-1">
                    <Link to="/forgot-password" className="auth-links">Lupa Password?</Link>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">
                  Masuk
                </button>

                <Link to="/register" className="btn btn-outline-success">
                  Daftar
                </Link>

                <div className="divider">atau</div>

                <button type="button" className="google-button">
                  <img src="https://www.google.com/favicon.ico" alt="Google" width="20" height="20" />
                  Masuk dengan Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
  