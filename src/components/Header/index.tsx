import { Container } from './styled';
import { Icons } from '../.';
import { SiteConfig } from '../../config/sinte-config';

export type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <div>
        <div className="logo-container">
          <Icons.Logo />
        </div>
        <div className="title-container">
          <h1>{SiteConfig.SITE_NAME}</h1>
        </div>
      </div>
      {props.children}
    </Container>
  );
}
