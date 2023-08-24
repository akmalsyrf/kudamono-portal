import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Kudamono Portal</title>
      <meta
        name="description"
        content="Example portal app using the components."
        key="desc"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
