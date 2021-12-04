import { Footer, Header, MainContainer, SEO } from '../../components';
import { SiteConfig } from '../../config/sinte-config';

export default function HomePage() {
  return (
    <>
      <SEO title={SiteConfig.SITE_NAME} />
      <Header />
      <MainContainer>
        <p>Hello World</p>
      </MainContainer>
      <Footer />
    </>
  );
}
