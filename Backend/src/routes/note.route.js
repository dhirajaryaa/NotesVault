import express from 'express';
import { createNotes } from '../controllers/note.controller.js';

export const notesRoutes = express.Router();

// Import note controller
notesRoutes.route("/").post(createNotes);