export default function DiagnosisPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white w-[700px] rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-blue-700">
          Infra Mentor AI
        </h1>

        <p className="mt-2 text-gray-500">
          共通情報を入力してください
        </p>

        <div className="mt-8">

          <label className="block font-semibold">
            カテゴリ
          </label>

          <select className="border rounded-lg p-2 w-full mt-2">
            <option>仮想端末（VDI）</option>
            <option>物理端末</option>
            <option>ネットワーク</option>
            <option>サーバ</option>
          </select>

        </div>

        <div className="mt-8">

          <label className="block font-semibold">
            ユーザ影響
          </label>

          <div className="mt-3 space-y-2">

            <label className="block">
              <input type="radio" name="user" />
              <span className="ml-2">一人</span>
            </label>

            <label className="block">
              <input type="radio" name="user" />
              <span className="ml-2">複数</span>
            </label>

            <label className="block">
              <input type="radio" name="user" />
              <span className="ml-2">全体</span>
            </label>

          </div>

        </div>

        <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          次へ
        </button>

      </div>
    </main>
  );
}