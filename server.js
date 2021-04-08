import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

// initialize express
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));

// routes
app.get('/', (req, res)=>{
   res.send('API is running');
});

// set-up
if(process.env.NODE_ENV === "development"){
   app.use(morgan('dev'));
}

const PORT = process.env.PORT ? process.env.PORT : 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));



