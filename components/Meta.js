import Head from 'next/head';

export default function Meta({ title, description, keywords }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="x-icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Crash Course',
  description: 'Web development tutorials',
  keywords: 'web development, programming',
};
