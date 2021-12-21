import { Handler } from 'netlify/functions';

export const handler:Handler = async (event) => {
  const name = event.queryStringParameters.name || 'World';
  return {
    statusCode: 200,
    body: `Hello, ${name}!`,
  };
};
