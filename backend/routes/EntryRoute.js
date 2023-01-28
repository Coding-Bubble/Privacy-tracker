import express from "express";
import { 
    getEntries, 
    getEntryById,
    saveEntry,
    updateEntry,
    deleteEntry
} from "../controllers/EntryController.js";

const router = express.Router();

router.get('/entries', getEntries);
router.get('/entries/:id', getEntryById);
router.post('/entries', saveEntry);
router.patch('/entries/:id', updateEntry);
router.delete('/entries/:id', deleteEntry);

export default router;