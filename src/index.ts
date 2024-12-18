import express, { Request, Response } from 'express';

const app = express();

const port = 7070;
app.listen(port, () => {
  console.log(`The server was listening on http://localhost:${port}`);
});