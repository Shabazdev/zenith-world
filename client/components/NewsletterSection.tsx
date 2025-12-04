import React, { useState } from "react";
import { Mail } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div
      className="w-full min-h-64 md:min-h-96 bg-cover bg-center px-4 md:px-20 py-12 md:py-24 flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/633d3803a96e8be98906c6de8891e96ac4e101c0?placeholderIfAbsent=true)",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-2xl text-center text-white">
        <p className="text-xs md:text-sm font-bold uppercase mb-2 md:mb-4 text-gray-300">
          newsfeed
        </p>
        <h2 className="text-3xl md:text-5xl font-medium mb-2 md:mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-base md:text-xl mb-6 md:mb-8">
          Sign up for deals, new products and promotions
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center border-b border-white max-w-md mx-auto"
        >
          <Mail size={20} className="mr-2 md:mr-3 text-white flex-shrink-0" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-white placeholder-opacity-70 outline-none py-2 md:py-3 px-2 text-sm md:text-base"
            required
          />
          <button
            type="submit"
            className="font-medium text-white hover:opacity-70 transition text-sm md:text-base flex-shrink-0"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
