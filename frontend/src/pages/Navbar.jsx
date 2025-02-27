function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/scholarships">Scholarships</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="auth-links">
        <Link to="/login" onClick={handleLogin}>
          Log In
        </Link>
        <Link to="/signup" onClick={handleSignup}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
