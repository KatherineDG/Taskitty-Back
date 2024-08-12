import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

dotenv.config();

const port = process.env.PORT;
const uridb = process.env.MONGODB_URI;

await mongoose.connect(uridb);

app.listen(port, () => {console.log(`Server is running on port ${port}`)});
