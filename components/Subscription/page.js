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
        setMessage("Thank You For Subscribing to our Newsletter !");
      } else {
        throw new Error("Failed to create a Subscriber");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-3 my-12">        
        {
            message ? 
                <h1 className="text-4xl text-center font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500">{ message }</h1>
            :   <div className="flex flex-row items-center justify-center gap-3 my-12">
                    <h1 className="text-4xl text-center font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500">Subscribe to our Newsletter</h1>
                    <form onSubmit={handleSubmit} className="flex flex-row gap-3">
                        <input
                            onChange={(e) => setSubscriberEmail(e.target.value)}
                            value={subscriberEmail}
                            className="border border-slate-500 px-8 py-2"
                            type="email"
                            placeholder="Email"
                        />

                        <button 
                            type="submit" 
                            className='border border-[#2daa52] text-[#2daa52] w-1/2 py-2 px-4'
                        > 
                            Subscribe
                        </button>
                        
                    </form>
                </div>        
        }        
    </div>
  );
}