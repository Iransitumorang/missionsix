function Register() {
    return (
      <div className="container mt-5">
        <h3>Register</h3>
        <input className="form-control mb-2" placeholder="Username" />
        <input className="form-control mb-2" type="email" placeholder="Email" />
        <input className="form-control mb-2" type="password" placeholder="Password" />
        <button className="btn btn-primary">Register</button>
      </div>
    );
  }
  
  export default Register;
  