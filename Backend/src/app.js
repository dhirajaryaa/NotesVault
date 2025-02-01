import express from 'express';
import cors from "cors"

export const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN
}));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// routes definition: 
import { notesRoutes } from './routes/note.route.js';

app.use("/api/v1/notes",notesRoutes);