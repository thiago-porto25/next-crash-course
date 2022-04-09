import Link from 'next/link';
import Meta from '../../../components/Meta';
import { server } from '../../../config';

export default function Article({ article }) {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/" passHref>
        <button
          style={{
            backgroundColor: '#000',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            color: '#f5f5f5',
          }}
        >
          Go Back
        </button>
      </Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
