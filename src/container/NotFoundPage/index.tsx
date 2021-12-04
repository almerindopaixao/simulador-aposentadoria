import { Footer, Header, MainContainer, SEO } from '../../components';
import { SiteConfig } from '../../config/sinte-config';

export default function NotFoundPage() {
  return (
    <>
      <SEO title={SiteConfig.SITE_NAME} />
      <Header />
      <MainContainer>
        <p>404</p>
      </MainContainer>
      <Footer />
    </>
  );
}
