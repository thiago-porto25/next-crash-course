import { articles } from '../../../data';

export default function handler(req, res) {
  const { id } = req.query;
  const article = articles.find((article) => article.id === id);

  if (!article) {
    res.status(404).json({
      error: 'Article not found',
    });
  } else {
    res.json(article);
  }
}
