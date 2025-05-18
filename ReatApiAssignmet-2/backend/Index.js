import express from 'express';
import cors from 'cors';
import formRoutes from './Routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount form routes
app.use('/api/form', formRoutes);

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));