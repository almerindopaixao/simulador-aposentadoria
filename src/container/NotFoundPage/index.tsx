import Image from 'next/image';
import { Footer, Header, MainContainer, SEO, Box } from '../../components';
import { SiteConfig } from '../../config/sinte-config';
import notFound from '../../assets/not_found.svg';

export default function NotFoundPage() {
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
          <Image
            priority={true}
            alt="Svg Not Found"
            src={notFound.src}
            layout="responsive"
            width={notFound.width}
            height={notFound.height}
          />
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
}
