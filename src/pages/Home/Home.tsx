import NavBar from '../../components/NavBar/NavBar';
import Product from '../../components/Product/Product';
import { Container } from './Styles';

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Product />
      </Container>
    </>
  );
}

export default Home;
