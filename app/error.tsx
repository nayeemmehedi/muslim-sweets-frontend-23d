// src/app/error.js
"use client";
import { useEffect } from "react";

export default function ErrorPage({ error, reset}:any) {
  useEffect(() => {
    // Log the error to an error reporting service, if needed
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-500">Something went wrong!</h1>
      <p className="mt-2 text-gray-600">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => window.location.reload()} // Attempt to recover by reloading the current route
        className="mt-4 px-4 py-2 bg-green-900 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
