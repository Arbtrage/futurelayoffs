// pages/api/github/[slug].ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { slug },
    method,
  } = req;

  switch (method) {
    case 'POST':
      if (req.url === `/api/github/${slug}/process-repository`) {
        return handleProcessRepository(req, res);
      } else if (req.url === `/api/github/${slug}/ask-questions`) {
        return handleAskQuestions(req, res);
      } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function handleProcessRepository(req: NextApiRequest, res: NextApiResponse) {

  const { data } = req.body;
  console.log(`Processing repository for slug: ${req.query.slug}`);
  console.log('Received data:', data);
 
  res.status(200).json({ message: 'Repository processed successfully' });
}

function handleAskQuestions(req: NextApiRequest, res: NextApiResponse) {

  const { questions } = req.body;
  console.log(`Asking questions for slug: ${req.query.slug}`);
  console.log('Received questions:', questions);

  res.status(200).json({ message: 'Questions asked successfully' });
}
