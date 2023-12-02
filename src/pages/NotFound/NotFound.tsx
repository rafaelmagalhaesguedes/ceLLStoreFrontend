import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div
      style={ {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center' } }
    >
      <h1>Página não encontrada!</h1>
      <h2>Erro 404</h2>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default NotFound;
