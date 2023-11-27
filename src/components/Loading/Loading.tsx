/*
*  Component Loading
*/
import { ContainerSpinner, Spinner } from './Styles';

export default function Loading() {
  return (
    <ContainerSpinner>
      <Spinner />
      <h1>Carregando...</h1>
    </ContainerSpinner>
  );
}
