import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-white py-5 border-top">
      <div className="container">
        {/* Logo dan Deskripsi */}
        <div className="row mb-4">
          <div className="col-lg-6">
            <img src={logo} alt="videobelajar" height="30" className="mb-3" />
            <h5>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h5>
            <p className="text-muted">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p className="text-muted">+62-877-7123-1234</p>
          </div>
        </div>

        {/* Menu Links */}
        <div className="row">
          <div className="col-6 col-md-3">
            <h6 className="mb-3">Kategori</h6>
            <ul className="list-unstyled">
              <li><Link to="/kategori/digital" className="text-muted text-decoration-none">Digital & Teknologi</Link></li>
              <li><Link to="/kategori/pemasaran" className="text-muted text-decoration-none">Pemasaran</Link></li>
              <li><Link to="/kategori/bisnis" className="text-muted text-decoration-none">Manajemen Bisnis</Link></li>
              <li><Link to="/kategori/pengembangan" className="text-muted text-decoration-none">Pengembangan Diri</Link></li>
              <li><Link to="/kategori/desain" className="text-muted text-decoration-none">Desain</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="mb-3">Perusahaan</h6>
            <ul className="list-unstyled">
              <li><Link to="/tentang-kami" className="text-muted text-decoration-none">Tentang Kami</Link></li>
              <li><Link to="/faq" className="text-muted text-decoration-none">FAQ</Link></li>
              <li><Link to="/kebijakan-privasi" className="text-muted text-decoration-none">Kebijakan Privasi</Link></li>
              <li><Link to="/ketentuan" className="text-muted text-decoration-none">Ketentuan Layanan</Link></li>
              <li><Link to="/bantuan" className="text-muted text-decoration-none">Bantuan</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="mb-3">Komunitas</h6>
            <ul className="list-unstyled">
              <li><Link to="/tips" className="text-muted text-decoration-none">Tips Sukses</Link></li>
              <li><Link to="/blog" className="text-muted text-decoration-none">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright dan Social Media */}
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="text-muted small mb-0">©2023 Gerobak Sayur All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-end">
            <a href="https://linkedin.com" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://facebook.com" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://twitter.com" className="text-muted" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 