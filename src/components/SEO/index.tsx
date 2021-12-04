import Head from 'next/head';

export type SEOProps = {
  title: string;
  description?: string;
  keywords?: string;
  url?: string;
  type?: 'blog' | 'website' | 'article' | 'profile';
  siteName?: string;
  author?: string;
  image_large?: string;
  image_small?: string;
  image_default?: string;
  children?: React.ReactNode;
};

export default function SEO({ title, children }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      {/*<meta name="application-name" content="Simulador Aposentadoria" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="creator" content={author} />
      <meta name="keywords" content={keywords} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

       <meta property="og:image" content={image_default} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />

      <meta property="og:image" content={image_large} />
      <meta property="og:image:alt" content={description} />

      <meta property="og:image" content={image_small} />
      <meta property="og:image:alt" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />*/}
      {children}
    </Head>
  );
}
