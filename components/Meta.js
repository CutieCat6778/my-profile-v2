export default function Meta() {
  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='icon' href="https://cutiecat6778.github.io/cdn/logo/logo_96.png" />
      <meta name="author" content="Thinh Nguyen" />
      <meta name="description" content="Personal blog of Thinh Nguyen, a full-stack web developer!" />
      <meta name="keywords" content="thinh, thinh's blog, blog, thinh blog, thinh nguyen blog, personal blog,portfolio, txzje, thinh nguyen, profile, thinh, vietnam" />
      <meta name="theme-color" content="#fff" />
      <link rel="apple-touch-icon" href="https://cutiecat6778.github.io/cdn/logo/logo_192.png" />
      <link rel="manifest" href="./manifest.webmanifest" crossorigin="use-credentials" />
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VH71GCJ5C5"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VH71GCJ5C5', { page_path: window.location.pathname });
            `,
          }}
        />
    </>
  )
}