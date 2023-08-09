// Import mongoose and Schema
import mongoose, { Schema } from "mongoose";

// Create a new Schema for ContactForm
const contactFormSchema = new Schema(
  {
    name: String,
    email: String,
    interest: String,
    ip: String,
  },
  {
    timestamps: true,
  }
);

// Create a new model for ContactForm
const ContactForm = mongoose.models.ContactForm || mongoose.model("ContactForm", contactFormSchema);

// Export the ContactForm model
export default ContactForm;