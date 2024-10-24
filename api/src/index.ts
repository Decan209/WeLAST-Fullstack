import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
