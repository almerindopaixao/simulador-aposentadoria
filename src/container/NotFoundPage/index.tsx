import { Footer, Header, MainContainer, SEO, Box } from '../../components';
import { SiteConfig } from '../../config/sinte-config';
import notFound from '../../assets/not_found.svg';

export default function NotFoundPage() {
  console.log(notFound);

  return (
    <>
      <SEO
        title={SiteConfig.SITE_NAME}
        author="Almerindo Paixão"
        type="website"
        siteName={SiteConfig.SITE_NAME}
        url={SiteConfig.SITE_URL}
      />
      <Header />
      <MainContainer>
        <Box marginTop="-12rem">
          <img src={notFound.src} width="100%" />
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
}
