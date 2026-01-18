import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f7fb] text-center px-4">
      
      <h1 className="text-6xl font-bold text-purple-600 mb-4">
        404
      </h1>

      <p className="text-gray-700 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
