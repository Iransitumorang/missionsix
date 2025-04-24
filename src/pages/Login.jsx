function Login() {
    return (
      <div className="container mt-5">
        <h3>Login</h3>
        <input className="form-control mb-2" placeholder="Username" />
        <input className="form-control mb-2" type="password" placeholder="Password" />
        <button className="btn btn-success">Login</button>
      </div>
    );
  }
  
  export default Login;
  