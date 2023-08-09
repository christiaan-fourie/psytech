import mongoose, { Schema } from "mongoose";

const emailSubscriberSchema = new Schema(
  {
    subscriberEmail: String,
    ip: String,
  },
  {
    timestamps: true,
  }
);

const EmailSubscriber = mongoose.models.EmailSubscriber || mongoose.model("EmailSubscriber", emailSubscriberSchema);

export default EmailSubscriber;