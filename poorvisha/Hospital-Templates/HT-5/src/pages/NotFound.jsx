
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section container text-center" style={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{color: 'var(--color-primary)', fontSize: '4rem', marginBottom: '1rem'}}>404</h1>
      <h2 style={{color: 'var(--color-text-primary)'}}>Page not found.</h2>
      <p style={{marginBottom: '2rem'}}>The page you're looking for may have moved or doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </div>
  );
}
