"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md transform -rotate-1 max-w-md mx-auto mt-20">
      <h1 className="text-6xl font-bold text-center mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Oops! That page cannot be found :(
      </h2>
      <p className="text-center text-gray-600">
        Redirecting to{" "}
        <Link href="/" className="text-amber-600 hover:underline">
          Homepage
        </Link>{" "}
        for more marmite goodness...
        <div className="flex justify-center mt-6">
          <div className="animate-bounce">⏳</div>
        </div>
      </p>
    </div>
  );
};

export default NotFound;
