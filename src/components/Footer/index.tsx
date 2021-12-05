import { Container } from './styled';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <p>Desenvolvido por Almerindo Paixão &copy; {currentYear}</p>
    </Container>
  );
}
