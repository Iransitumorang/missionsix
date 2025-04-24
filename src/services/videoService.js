const initialVideos = [
  {
    id: 1,
    title: "Big 4 Auditor Financial Analyst",
    price: 300000,
    author: "James Wright",
    rating: 4.5,
    students: 1234,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
    description: "Pelajari cara menjadi Financial Analyst di Big 4"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    price: 250000,
    author: "Sarah Chen",
    rating: 4.8,
    students: 2156,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    description: "Memahami dasar-dasar Data Science dan implementasinya"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    price: 200000,
    author: "Michael Brown",
    rating: 4.6,
    students: 1879,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    description: "Strategi pemasaran digital yang efektif untuk bisnis"
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    price: 350000,
    author: "Emma Davis",
    rating: 4.9,
    students: 3421,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
    description: "Belajar desain UI/UX dari dasar hingga mahir"
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    price: 400000,
    author: "Alex Johnson",
    rating: 4.7,
    students: 2890,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    description: "Menjadi Full Stack Developer dengan React dan Node.js"
  },
  {
    id: 6,
    title: "Business Analytics Essential",
    price: 275000,
    author: "Rachel Kim",
    rating: 4.4,
    students: 1567,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    description: "Analisis bisnis untuk pengambilan keputusan"
  },
  {
    id: 7,
    title: "Project Management Professional",
    price: 325000,
    author: "David Wilson",
    rating: 4.6,
    students: 2134,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60",
    description: "Pengelolaan proyek yang efektif dan efisien"
  },
  {
    id: 8,
    title: "Cyber Security Basics",
    price: 375000,
    author: "Tom Anderson",
    rating: 4.8,
    students: 1987,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    description: "Dasar-dasar keamanan siber dan pencegahan serangan"
  },
  {
    id: 9,
    title: "Content Creation & Strategy",
    price: 225000,
    author: "Lisa Martinez",
    rating: 4.5,
    students: 2456,
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&auto=format&fit=crop&q=60",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
    description: "Strategi pembuatan konten yang menarik dan efektif"
  }
];

// Get all videos
export const getAllVideos = () => {
  return initialVideos;
};

// Get video by id
export const getVideoById = (id) => {
  return initialVideos.find(video => video.id === id);
};

// Add new video
export const addVideo = (video) => {
  const newVideo = {
    ...video,
    id: Date.now(),
    rating: 0,
    students: 0
  };
  initialVideos.push(newVideo);
  return newVideo;
};

// Update video
export const updateVideo = (id, updatedVideo) => {
  const index = initialVideos.findIndex(video => video.id === id);
  if (index !== -1) {
    initialVideos[index] = { ...initialVideos[index], ...updatedVideo };
    return initialVideos[index];
  }
  return null;
};

// Delete video
export const deleteVideo = (id) => {
  const index = initialVideos.findIndex(video => video.id === id);
  if (index !== -1) {
    return initialVideos.splice(index, 1)[0];
  }
  return null;
};
