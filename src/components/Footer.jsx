import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-white py-5 border-top">
      <div className="container">
        <div className="row">
          {/* Kolom Kiri - Logo dan Info */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <span className="text-warning fs-5">videobelajar</span>
            </div>
            <p className="mb-2">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <p className="text-muted mb-1">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p className="text-muted">+62-877-7123-1234</p>
          </div>

          {/* Kolom Menu */}
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-4">
                <h6 className="mb-3">Kategori</h6>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/kategori/digital" className="text-muted text-decoration-none">Digital & Teknologi</Link></li>
                  <li className="mb-2"><Link to="/kategori/pemasaran" className="text-muted text-decoration-none">Pemasaran</Link></li>
                  <li className="mb-2"><Link to="/kategori/bisnis" className="text-muted text-decoration-none">Manajemen Bisnis</Link></li>
                  <li className="mb-2"><Link to="/kategori/pengembangan" className="text-muted text-decoration-none">Pengembangan Diri</Link></li>
                  <li className="mb-2"><Link to="/kategori/desain" className="text-muted text-decoration-none">Desain</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="mb-3">Perusahaan</h6>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/tentang-kami" className="text-muted text-decoration-none">Tentang Kami</Link></li>
                  <li className="mb-2"><Link to="/faq" className="text-muted text-decoration-none">FAQ</Link></li>
                  <li className="mb-2"><Link to="/kebijakan-privasi" className="text-muted text-decoration-none">Kebijakan Privasi</Link></li>
                  <li className="mb-2"><Link to="/ketentuan" className="text-muted text-decoration-none">Ketentuan Layanan</Link></li>
                  <li className="mb-2"><Link to="/bantuan" className="text-muted text-decoration-none">Bantuan</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="mb-3">Komunitas</h6>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/tips" className="text-muted text-decoration-none">Tips Sukses</Link></li>
                  <li className="mb-2"><Link to="/blog" className="text-muted text-decoration-none">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright dan Social Media */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col-md-6">
            <p className="text-muted small mb-0">@2023 Gerobak Sayur All Rights Reserved.</p>
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