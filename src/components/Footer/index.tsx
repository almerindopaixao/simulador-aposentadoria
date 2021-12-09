import { Container } from './styled';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <p>
        {currentYear} &copy;{' '}
        <a
          href="https://www.linkedin.com/in/almerindopaixao/"
          target="_blank"
          rel="noreferrer"
        >
          almerindopaixao
        </a>{' '}
        - Todos os direitos reservados{' '}
      </p>
    </Container>
  );
}
