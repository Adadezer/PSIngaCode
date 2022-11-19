import App from './app';

const port = process.env.APP_PORT || 3001;

App.listen(
  port,
  () => console.log(`Api rodando na porta ${port}`),
);