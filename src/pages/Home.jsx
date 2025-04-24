import { useState, useEffect } from "react";
import "../styles/Home.css";
import { getAllVideos, addVideo, updateVideo, deleteVideo } from "../services/videoService";

function Home() {
  // State untuk video dan modal
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    author: "",
    description: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60"
  });
  const [email, setEmail] = useState("");

  // Load initial data
  useEffect(() => {
    const loadVideos = () => {
      const allVideos = getAllVideos();
      setVideos(allVideos);
    };
    loadVideos();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe email:", email);
    setEmail("");
  };

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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60"
    });
    setShowModal(true);
  };

  // CREATE/UPDATE: Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const videoData = {
      ...formData,
      price: parseInt(formData.price)
    };

    if (modalMode === 'add') {
      // Create new video
      const newVideo = addVideo(videoData);
      setVideos(prev => [...prev, newVideo]);
    } else {
      // Update existing video
      const updatedVideo = updateVideo(selectedVideo.id, videoData);
      if (updatedVideo) {
        setVideos(prev => prev.map(video => 
          video.id === selectedVideo.id ? updatedVideo : video
        ));
      }
    }

    handleCloseModal();
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
      const deletedVideo = deleteVideo(id);
      if (deletedVideo) {
        setVideos(prev => prev.filter(video => video.id !== id));
      }
    }
  };

  // Close modal dan reset state
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
    setFormData({
      title: "",
      price: "",
      author: "",
      description: "",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60"
    });
  };

  // Handle click outside modal
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      handleCloseModal();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 mx-75px my-4" style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1440&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        margin: '1.5rem 75px'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h1 className="text-white mb-4">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
              <p className="text-white-50 mb-4">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, 
                Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
              </p>
              <button className="btn btn-warning px-4">
                Temukan Video Course untuk Dipelajari!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-section mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Koleksi Video Pembelajaran Unggulan</h2>
          <button className="btn-add-video" onClick={() => setShowModal(true)}>
            <i className="bi bi-plus-circle"></i>
          Tambah Video
        </button>
      </div>

        {/* Video Grid */}
        <div className="row g-4">
        {videos.map((video) => (
            <div className="col-md-4" key={video.id}>
              <div className="card">
                <img src={video.image} className="card-img-top" alt={video.title} />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={video.avatar} 
                      className="rounded-circle me-2" 
                      width="32" 
                      height="32" 
                      alt={video.author}
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="text-muted">{video.author}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="text-warning">★</span> {video.rating}
                      <span className="text-muted ms-2">({video.students})</span>
                    </div>
                    <h6 className="text-success fw-bold mb-0">Rp {video.price.toLocaleString()}</h6>
                  </div>
                  <div className="btn-group w-100 mt-3">
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

      {/* Newsletter Section */}
      <section className="newsletter py-5 mx-75px my-4" style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1440&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        margin: '1.5rem 75px'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <span className="text-white-50 mb-2 d-block">NEWSLETTER</span>
              <h2 className="text-white mb-4">Mau Belajar Lebih Banyak?</h2>
              <p className="text-white-50 mb-4">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
              </p>
              <form onSubmit={handleSubscribe} className="d-flex gap-2 justify-content-center">
                <div className="position-relative" style={{ width: '100%' }}>
                  <input
                    type="email"
                    className="form-control rounded-pill py-2 px-4"
                    placeholder="Masukkan Emailmu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      backgroundColor: 'white',
                      border: 'none',
                      fontSize: '15px'
                    }}
                  />
                  <button type="submit" className="btn btn-warning position-absolute end-0 top-50 translate-middle-y me-2 rounded-pill" style={{ 
                    minWidth: '100px',
                    padding: '0.25rem 0.75rem',
                    fontSize: '14px'
                  }}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" onClick={(e) => {
          if (e.target.classList.contains('modal')) setShowModal(false);
        }}>
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
                  {modalMode !== 'view' && (
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
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
      </div>
      )}
    </div>
  );
}

export default Home;
