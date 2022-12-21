import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div
          id="overlay-root"
          className="fixed top-0 left-0 h-screen w-screen"
        />
      </body>
    </Html>
  );
}
