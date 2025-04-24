import { useState } from "react";
import "../styles/Home.css";

function Home() {
  // State untuk video dan modal
  const [videos, setVideos] = useState([
    { 
      id: 1, 
      title: "Big 4 Auditor Financial Analyst", 
      price: 300000,
      author: "James Wright",
      rating: 4.5,
      students: 1234,
      image: "/course-1.jpg",
      avatar: "/avatar-1.jpg",
      description: "Pelajari cara menjadi Financial Analyst di Big 4"
    },
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' atau 'edit'
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    author: "",
    description: "",
    image: "",
    avatar: ""
  });
  const [activeTab, setActiveTab] = useState("semua");

  // Handler untuk input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // CREATE: Tambah video baru
  const handleAdd = () => {
    setModalMode('add');
    setFormData({
      title: "",
      price: "",
      author: "",
      description: "",
      image: "/default-course.jpg",
      avatar: "/default-avatar.jpg"
    });
    setShowModal(true);
  };

  // CREATE/UPDATE: Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const videoData = {
      ...formData,
      price: parseInt(formData.price),
      rating: modalMode === 'add' ? 0 : selectedVideo.rating,
      students: modalMode === 'add' ? 0 : selectedVideo.students
    };

    if (modalMode === 'add') {
      // Create new video
      setVideos(prev => [...prev, { ...videoData, id: Date.now() }]);
    } else {
      // Update existing video
      setVideos(prev => prev.map(video => 
        video.id === selectedVideo.id ? { ...video, ...videoData } : video
      ));
    }

    setShowModal(false);
  };

  // READ: Tampilkan detail video
  const handleView = (video) => {
    setSelectedVideo(video);
    setFormData(video);
    setModalMode('view');
    setShowModal(true);
  };

  // UPDATE: Edit video
  const handleEdit = (video) => {
    setSelectedVideo(video);
    setFormData(video);
    setModalMode('edit');
    setShowModal(true);
  };

  // DELETE: Hapus video
  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus video ini?')) {
      setVideos(prev => prev.filter(video => video.id !== id));
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-dark text-white py-5 px-4 text-center">
        <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
        <p className="mt-3">Temukan ilmu baru yang lengkap dan mendalam dari mentor berpengalaman (SME). Mulai belajar ke jenjang karir yang lebih tinggi!</p>
        <button className="btn btn-success mt-3">Mulai Belajar</button>
      </div>

      {/* Main Content */}
      <div className="container mt-4">
        {/* Admin Actions */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Koleksi Video Pembelajaran Unggulan</h2>
          <button className="btn btn-primary" onClick={handleAdd}>
            <i className="bi bi-plus-circle me-2"></i>Tambah Video
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="nav nav-tabs mb-4">
          <button 
            className={`nav-link ${activeTab === "semua" ? "active" : ""}`}
            onClick={() => setActiveTab("semua")}
          >
            Semua Video
          </button>
          <button 
            className={`nav-link ${activeTab === "pembelajaran" ? "active" : ""}`}
            onClick={() => setActiveTab("pembelajaran")}
          >
            Pembelajaran
          </button>
          <button 
            className={`nav-link ${activeTab === "favorit" ? "active" : ""}`}
            onClick={() => setActiveTab("favorit")}
          >
            Favorit
          </button>
          <button 
            className={`nav-link ${activeTab === "rekomendasi" ? "active" : ""}`}
            onClick={() => setActiveTab("rekomendasi")}
          >
            Rekomendasi Saya
          </button>
          <button 
            className={`nav-link ${activeTab === "bonus" ? "active" : ""}`}
            onClick={() => setActiveTab("bonus")}
          >
            Bonus
          </button>
        </div>

        {/* Video Grid */}
        <div className="row">
          {videos.map((video) => (
            <div className="col-md-4 mb-4" key={video.id}>
              <div className="card">
                <img src={video.image} className="card-img-top" alt={video.title} />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <div className="d-flex align-items-center mb-2">
                    <img src={video.avatar} className="rounded-circle me-2" width="30" height="30" alt={video.author} />
                    <span>{video.author}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span className="text-warning">★</span> {video.rating}
                      <span className="ms-2">({video.students})</span>
                    </div>
                    <h6 className="text-success mb-0">Rp {video.price.toLocaleString()}</h6>
                  </div>
                  <div className="btn-group w-100">
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleView(video)}>
                      <i className="bi bi-eye me-1"></i>Lihat
                    </button>
                    <button className="btn btn-outline-warning btn-sm" onClick={() => handleEdit(video)}>
                      <i className="bi bi-pencil me-1"></i>Edit
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(video.id)}>
                      <i className="bi bi-trash me-1"></i>Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-light text-center py-5 mt-4">
        <h3>Mau Belajar Lebih Banyak?</h3>
        <p>Dapatkan akses ke semua video pembelajaran kami</p>
        <div className="d-flex justify-content-center gap-2">
          <input type="email" className="form-control w-auto" placeholder="Masukkan Email" />
          <button className="btn btn-warning">Daftar</button>
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalMode === 'add' ? 'Tambah Video Baru' : 
                   modalMode === 'edit' ? 'Edit Video' : 'Detail Video'}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Judul Video</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      disabled={modalMode === 'view'}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Harga</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      disabled={modalMode === 'view'}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Penulis</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      disabled={modalMode === 'view'}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Deskripsi</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      disabled={modalMode === 'view'}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">URL Gambar</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      disabled={modalMode === 'view'}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">URL Avatar</label>
                    <input
                      type="text"
                      className="form-control"
                      name="avatar"
                      value={formData.avatar}
                      onChange={handleInputChange}
                      disabled={modalMode === 'view'}
                      required
                    />
                  </div>
                  {modalMode !== 'view' && (
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                        Batal
                      </button>
                      <button type="submit" className="btn btn-primary">
                        {modalMode === 'add' ? 'Tambah' : 'Simpan Perubahan'}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show"></div>
        </div>
      )}
    </div>
  );
}

export default Home;
