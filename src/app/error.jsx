"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f7fb] px-4 text-center">
      
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>

      <p className="text-gray-700 max-w-md mb-6">
        We’re sorry, but something unexpected happened.  
        Please try again or refresh the page.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Try Again
        </button>

        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 rounded-lg border hover:bg-gray-100 transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
