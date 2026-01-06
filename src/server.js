import express from 'express';
import { PORT } from './config/env.js';
// import projectroutes from './routes/projectroutes.js';
import authroutes from './routes/authroute.js';
import errorHandler from './middleware/errorHandler.js';
import { connection } from './db.js';



const app = express();


app.use(express.json());

// Routes
// app.use('/api/project', projectroutes);
app.use('/api/auth', authroutes);
// Error Handler
app.use(errorHandler());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connection();
});