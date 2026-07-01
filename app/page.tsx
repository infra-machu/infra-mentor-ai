import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[600px]">
        <h1 className="text-4xl font-bold text-blue-700">
          Infra Mentor AI
        </h1>

        <p className="mt-4 text-gray-600">
          新人インフラSEの最初の切り分けを支援するAI
        </p>

<Link
  href="/diagnosis"
  className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
>
  診断を開始する
</Link>
      </div>
    </main>
  );
}