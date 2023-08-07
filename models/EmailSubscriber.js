import mongoose, { Schema } from "mongoose";

const emailSubscriberSchema = new Schema(
  {
    subscriberEmail: String,
    date: Date,
    ip: String,
  },
  {
    timestamps: false,
  }
);

const EmailSubscriber = mongoose.models.EmailSubscriber || mongoose.model("EmailSubscriber", emailSubscriberSchema);

export default EmailSubscriber;