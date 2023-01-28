import Entry from "../models/EntryModel.js";

export const getEntries = async (req, res) => {
    try {
        const Entries = await Entry.find();
        res.json(Entries);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getEntryById = async (req, res) => {
    try {
        const Entry = await Entry.findById(req.params.id);
        res.json(Entry);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveEntry = async (req, res) => {
    const entry = new Entry(req.body);
    try {
        const insertedEntry = await entry.save();
        res.status(201).json(insertedEntry);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateEntry = async (req, res) => {
    try {
        const updatedEntry = await Entry.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteEntry = async (req, res) => {
    try {
        const deletedEntry = await Entry.deleteOne({_id:req.params.id});
        res.status(200).json(deletedEntry);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}