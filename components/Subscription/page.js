"use client";

import { useState } from "react";

export default function AddEmailSubscriber() {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [message, setMessage] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subscriberEmail) {
      alert("Email Required.");
      return;
    }

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ subscriberEmail }),
      });

      if (res.ok) {
        setMessage("Email Added");
      } else {
        throw new Error("Failed to create a Subscriber");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e) => setSubscriberEmail(e.target.value)}
            value={subscriberEmail}
            className="border border-slate-500 px-8 py-2"
            type="email"
            placeholder="Email"
        />

        <button 
            type="submit" 
            className='border border-[#2daa52] text-[#2daa52] my-4 py-2 px-4'
        > 
            Subscribe
        </button>
        {message && <p>{message}</p>}

    </form>
  );
}