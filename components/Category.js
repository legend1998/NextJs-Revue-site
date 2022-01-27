import Link from "next/link";
import { useState } from "react";

function Category({ cat }) {
  const [show, setshow] = useState(false);
  return (
    <li className="text-sm pl-4 my-4">
      <div className="flex">
        <i className={cat.class + " fa-lg pr-3"}></i>
        <p className="flex-1">{cat.name}</p>
        {show ? (
          <i
            className="fas fa-minus px-2 cursor-pointer"
            onClick={() => setshow(false)}
          ></i>
        ) : (
          <i
            className="fas fa-plus px-2  cursor-pointer"
            onClick={() => setshow(true)}
          ></i>
        )}
      </div>

      {show ? (
        <div className=" pl-8 py-2 ">
          {cat.subcategory.map((subcat, index) => (
            <Link
              href={`/category/${cat.id}/${subcat.replaceAll(" ", "_")}`}
              key={index}
            >
              <p className="py-1 cursor-pointer">{subcat}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </li>
  );
}

export default Category;
