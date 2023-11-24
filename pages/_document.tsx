import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    content="JustiGuides, powered by Dolores AI, is your ultimate legal assistant. It can answer legal queries, create lists, explain laws in any language, and much more."
                    name="description"
                />
                <meta content="JustiGuides - Your Ultimate Legal Assistant" property="og:title" />
                <meta
                    content="JustiGuides, powered by Dolores AI, is your ultimate legal assistant."
                    property="og:description"
                />
                <meta
                    content="%PUBLIC_URL%/justiguides-og-image.png"
                    property="og:image"
                />
                <meta
                    property="og:url"
                    content="https://justiguide.com"
                />
                <meta property="og:site_name" content="JustiGuides" />
                <meta
                    content="JustiGuides - Your Ultimate Legal Assistant"
                    property="twitter:title"
                />
                <meta
                    content="JustiGuides can answer all your legal queries, help with case tracking, and even assist with cost calculations."
                    property="twitter:description"
                />
                <meta
                    content="%PUBLIC_URL%/justiguides-twitter-card.png"
                    property="twitter:image"
                />
                <meta property="og:type" content="Software" />
                <meta content="summary" name="twitter:card" />
                <meta name="twitter:site" content="@JustiGuides" />
                <meta name="twitter:creator" content="@JustiGuides" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="msapplication-TileColor" content="#0047ab" />
                <meta name="theme-color" content="#0047ab" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
