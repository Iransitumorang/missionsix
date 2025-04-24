import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/auth.css';
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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
    console.log('Register data:', formData);
    // Redirect ke halaman login setelah register berhasil
    navigate('/login');
  };

  return (
    <div className="auth-page d-flex align-items-center py-5">
      <div className="container">
        <div className="auth-card">
          <div className="card">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img src={logo} alt="Logo" height="40" className="auth-logo" />
                <h4 className="auth-title">Buat Akun Baru</h4>
                <p className="auth-subtitle mb-0">Daftar untuk mulai belajar di VideoBelajar</p>
              </div>

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3" autoComplete="off">
                <div>
                  <label htmlFor="name" className="form-label required-field">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder=""
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label required-field">E-Mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label required-field">No. HP</label>
                  <div className="phone-input">
                    <select className="form-control country-select" disabled>
                      <option value="+62">ID +62</option>
                    </select>
                    <input
                      type="tel"
                      className="form-control phone-number"
                      id="phone"
                      name="phone"
                      placeholder=""
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="form-label required-field">Kata Sandi</label>
                  <div className="password-field">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder=""
                      value={formData.password}
                      onChange={handleChange}
                      required
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="form-label required-field">Konfirmasi Kata Sandi</label>
                  <div className="password-field">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder=""
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <i className={`bi bi-eye${showConfirmPassword ? '-slash' : ''}`}></i>
                    </button>
                  </div>
                  <div className="text-end mt-1">
                    <Link to="/forgot-password" className="auth-links">Lupa Password?</Link>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">
                  Daftar
                </button>

                <Link to="/login" className="btn btn-outline-success">
                  Masuk
                </Link>

                <div className="divider">atau</div>

                <button type="button" className="google-button">
                  <img src="https://www.google.com/favicon.ico" alt="Google" width="20" height="20" />
                  Daftar dengan Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
  