import Nav from '../../components/Nav/Nav';
import Product from '../../components/Product/Product';
import { Container, Main } from './Styles';

function Home() {
  return (
    <Container>
      <Nav />
      <Main>
        <Product />
      </Main>
    </Container>
  );
}

export default Home;
