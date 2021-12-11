import { H1, H2, H3, P } from './styled';

export type TypographyProps = {
  children: React.ReactNode;
  component: 'h1' | 'h2' | 'h3' | 'p';
};

export default function Typography(props: TypographyProps) {
  switch (props.component) {
    case 'h1':
      return <H1>{props.children}</H1>;
    case 'h2':
      return <H2>{props.children}</H2>;
    case 'h3':
      return <H3>{props.children}</H3>;
    case 'p':
      return <P>{props.children}</P>;
    default:
      return <P>{props.children}</P>;
  }
}
