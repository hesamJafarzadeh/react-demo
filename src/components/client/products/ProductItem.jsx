import { Link } from "react-router";

export default function ({ product: { id, title, body } }) {
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img
        src="https://placehold.co/600x400"
        alt={title}
        className="w-full h-[400px]  object-cover"
      />
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-green-600 font-bold">
          $ {(Math.random() * 1000).toLocaleString()}
        </p>
        <p className="line-clamp-2">{body}</p>
        <Link to={`/products/${id}`}>
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
}
