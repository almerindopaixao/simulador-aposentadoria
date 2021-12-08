import { Container } from './styled';

export type MainContainerPropos = {
  children: React.ReactNode;
};
export default function MainContainer({ children }: MainContainerPropos) {
  return <Container>{children}</Container>;
}
