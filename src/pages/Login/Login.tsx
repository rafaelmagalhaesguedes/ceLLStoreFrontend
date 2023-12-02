import { Link } from 'react-router-dom';

function Login() {
  return (
    <div
      style={ {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center' } }
    >
      <h1>Página em construção!</h1>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default Login;
