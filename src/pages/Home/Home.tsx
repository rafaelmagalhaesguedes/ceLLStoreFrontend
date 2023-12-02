import NavBar from '../../components/NavBar/NavBar';
import Product from '../../components/Product/Product';
import { Container, Main } from './Styles';

function Home() {
  return (
    <Container>
      <NavBar />
      <Main>
        <Product />
      </Main>
    </Container>
  );
}

export default Home;
