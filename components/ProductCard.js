import { useRouter } from "next/router";

function ProductCard({ product }) {
  const navigate = useRouter();
  return (
    <div
      onClick={() => navigate.push("/product/" + product.id)}
      className="w-40 flex flex-col justify-around h-60  rounded-md overflow-hidden shadow-lg  hover:scale-110 transition duration-500 cursor-pointer"
    >
      <div className="h-36 p-1 flex justify-center overflow-clip">
        <img src={product.imageUrl} alt="" className=" opacity-80" />
      </div>
      <h3 className="text-sm text-center font-semibold text-gray-300">
        {product.name}
      </h3>
    </div>
  );
}

export default ProductCard;
