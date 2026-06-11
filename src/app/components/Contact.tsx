'use client';

export const Contact = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Biz Bilan Bog'lanish</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded border border-green-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded border border-green-600"
          />
          <textarea
            placeholder="Xabar"
            rows={5}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded border border-green-600"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};
