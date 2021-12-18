import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { SiteConfig } from '../config/sinte-config';

const appleTouchIcons = [
  { sizes: '57x57', href: '/apple-icon-57x57.png' },
  { sizes: '60x60', href: '/apple-icon-60x60.png' },
  { sizes: '72x72', href: '/apple-icon-72x72.png' },
  { sizes: '76x76', href: '/apple-icon-76x76.png' },
  { sizes: '114x114', href: '/apple-icon-114x114.png' },
  { sizes: '120x120', href: '/apple-icon-120x120.png' },
  { sizes: '144x144', href: '/apple-icon-144x144.png' },
  { sizes: '152x152', href: '/apple-icon-152x152.png' },
  { sizes: '180x180', href: '/apple-icon-180x180.png' },
];

const icons = [
  { sizes: '16x16', href: '/favicon-16x16.png' },
  { sizes: '32x32', href: '/favicon-32x32.png' },
  { sizes: '96x96', href: '/favicon-96x96.png' },
  { sizes: '192x192', href: '/android-icon-192x192.png' },
];
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${SiteConfig.GTM_ID}');`,
            }}
          />
          {/* End Google Tag Manager */}
          {/* Google Adsense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7044213475500493"
            crossOrigin="anonymous"
          ></script>
          {/* End Google Adsense */}
          <meta name="rating" content="general" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="revisit-after" content="1 day" />
          <meta name="theme-color" content="#fff" />

          {appleTouchIcons.map((value) => (
            <link
              key={value.href}
              rel="apple-touch-icon"
              sizes={value.sizes}
              href={value.href}
            />
          ))}

          {icons.map((value) => (
            <link
              key={value.href}
              rel="icon"
              type="image/png"
              sizes={value.sizes}
              href={value.href}
            />
          ))}

          <link rel="manifest" href="/manifest.json" />

          <meta name="msapplication-TileColor" content="#fff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript)*/}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${SiteConfig.GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
