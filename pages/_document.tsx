import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="MERN stack developer" />
        <meta
          name="keywords"
          content="MERN stack developer, Full Stack Web Developer"
        />
      </Head>
      <body className="bg-gradient-to-r from-blue-600 to-greenCustom dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
