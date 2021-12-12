import {
  Footer,
  Header,
  MainContainer,
  SEO,
  Box,
  Typography,
} from '../../components';
import { SiteConfig } from '../../config/sinte-config';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title={SiteConfig.SITE_TITLE}
        description="teste"
        author="Almerindo Paixão"
        type="website"
        siteName={SiteConfig.SITE_NAME}
        url={SiteConfig.SITE_URL}
        image_default={`${SiteConfig.SITE_URL}/banner.png`}
      />
      <Header />
      <MainContainer>
        <Box marginTop="-20rem" minHeight="40rem">
          <Typography component="h1">Error 404</Typography>
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
}
