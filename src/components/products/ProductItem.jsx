export default function ({ product: { id, name, price, image } }) {
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img src={image} alt={name} className="w-full h-[400px]  object-cover" />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sky-600 font-bold">{price.toLocaleString()} $</p>
        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition">
          See more
        </button>
      </div>
    </div>
  );
}
