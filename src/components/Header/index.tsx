import { Container } from './styled';
import { Icons } from '../.';

export default function Header() {
  return (
    <Container>
      <div>
        <div className="logo-container">
          <Icons.Logo />
        </div>
        <div className="title-container">
          <h1>Simulador de Aposentadoria</h1>
        </div>
      </div>
    </Container>
  );
}
