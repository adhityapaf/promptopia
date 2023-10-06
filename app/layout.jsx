import "@styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  metadataBase: new URL("https://akd-promptopia.vercel.app"),
  openGraph: {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
    images: "/opengraph-image.png",
    url: new URL("https://akd-promptopia.vercel.app"),
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="8ikYurjblJVcA0XOw8967l1Dv7-7t8Bx5jY5onmVsNM"
        />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
            <Analytics />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
