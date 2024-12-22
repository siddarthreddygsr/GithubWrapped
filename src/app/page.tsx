"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [,] = useState(1);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    router.push(`/${username}`);
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-mono tracking-tight">
            GITHUB WRAPPED 2024_
          </h1>
          <div className="h-[1px] w-24 bg-gray-800 mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="github username"
            className="w-full bg-transparent border border-gray-800 text-white h-12 px-4 font-mono rounded-md focus:outline-none focus:border-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-black h-12 font-mono rounded-md transition-colors"
          >
            View Your Year
          </button>
        </form>
      </div>
    </div>
  );
}
