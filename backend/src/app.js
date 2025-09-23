import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes/index.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API proxy running on http://localhost:${PORT}`));
