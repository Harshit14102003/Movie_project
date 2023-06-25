import mongoose from "mongoose"; 
const contactSchema=new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
timestamp : true,
    })
    //if there is already data in mongoose use that schema or else  create a document contact with the above schema
    const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
    export default Contact;