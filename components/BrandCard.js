import { useRouter } from "next/router";

function BrandCard({ brand }) {
  const navigate = useRouter();
  return (
    <div
      onClick={() => navigate.push("/brand/" + brand.id)}
      className=" w-36 h-52 rounded-md overflow-hidden shadow-sm shadow-black hover:shadow-md hover:shadow-black hover:scale-110 transition duration-500 cursor-pointer"
    >
      <div className="h-36 flex justify-center overflow-clip">
        <img
          src={
            brand?.imageUrl ??
            "https://1000logos.net/wp-content/uploads/2016/10/Apple-logo.jpg"
          }
          className=" opacity-80"
          alt=""
        />
      </div>
      <div className="p-2">
        <h3 className="text-center font-semibold text-gray-300 ">
          {brand?.name}
        </h3>
      </div>
    </div>
  );
}

export default BrandCard;
