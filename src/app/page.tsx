import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Carbonstream</span>
        </h1>
        <p className="mt-3 text-2xl">
          Get started by editing <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">app/page.tsx</code>
        </p>
      </main>
    </div>
  );
}
