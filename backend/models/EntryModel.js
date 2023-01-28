import mongoose from "mongoose";

const Entry = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    }
    
});

export default mongoose.model('Entries', Entry);