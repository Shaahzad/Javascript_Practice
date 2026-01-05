import express from 'express';
import { PORT } from './config/env.js';
import projectroutes from './routes/projectroutes.js';
import errorHandler from './middleware/errorHandler.js';



const app = express();


app.use(express.json());

// Routes
app.use('/api/project', projectroutes);
// Error Handler
app.use(errorHandler());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});