import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const app = express();

app.use(express.json({limit:'16kb'}));
app.use(cors())


//Routes
import uploadRoutes from './routes/upload.route.js';

app.use('/file', uploadRoutes)

export default app;