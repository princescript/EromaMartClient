import products from "@/services/productService";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetails({ params }: Props) {
  const id = Number(params.id);

  console.log("param id:", params.id);
  console.log("converted id:", id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">

      {/* IMAGE */}
      <div className="relative h-96 w-full rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        <p className="text-xl font-bold mt-2">₹{product.price}</p>

        {product.unit && (
          <p className="text-sm text-gray-500">
            {product.unit}{" "}
            {product.perPiece ? `| ₹${product.perPiece}/pc` : ""}
          </p>
        )}

        {/* ACTION BUTTONS */}
        <div className="mt-6 space-y-3">
          <button className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Add to Cart
          </button>

          <button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}