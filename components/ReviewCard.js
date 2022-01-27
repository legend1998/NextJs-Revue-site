import { useState } from "react";
import ReviewPopUp from "./ReviewPopUp";

function ReviewCard({ review }) {
  const [show, setshow] = useState(false);
  if (show)
    return (
      <ReviewPopUp close={setshow}>
        <div className="cursor-pointer w-80 flex flex-col items-center justify-center gap-1 text-gray-300">
          <video
            className="w-64 rounded-md min-h-fit"
            src={review.reviewUrl}
            autoPlay
          ></video>
          <p className="">{review.parentName}</p>
          <div className="flex">
            <p className="text-sm flex-1">
              <span className=" font-bold">title :</span>
              {review.name}
            </p>
          </div>
          <div className="flex justify-center items-end">
            <div className="p-1">
              <div className="py-2 flex items-center">
                <i className="fas fa-eye px-2"></i>
                {review.views}
              </div>
            </div>
            <div className=""></div>
            <div className="p-1 flex">
              <div className="py-2 flex items-center">
                <i className="fas fa-star px-2"></i>
                {review.rating}
              </div>
              <div className="py-2">
                <i className="fas fa-share px-2"></i>
              </div>
              <div className="py-2">
                <i className="fas fa-flag px-2"></i>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center py-2">
            <img
              src={review.uploadedBy.image ?? "https://i.pravatar.cc/50"}
              alt=""
              className="w-10 h-10 rounded-full border-gray-900"
            />
            <p className="">{review.uploadedBy.name}</p>
          </div>
          <p className="text-sm">
            <span className=" font-bold">Description :</span>
            {review.description}
          </p>
        </div>
      </ReviewPopUp>
    );
  else
    return (
      <div
        className="w-56 border border-opacity-5 rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
        onClick={() => setshow(true)}
      >
        <div className=" h-96 overflow-hidden rounded-md">
          <img src={review.thumbnail} className=" opacity-80" alt="" />
        </div>
        <div>
          <div className="flex items-center mt-2">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={review.uploadedBy.image ?? "https://i.pravatar.cc/150?img=3"}
              alt="img"
            />
            <h2 className="text-normal">{review.uploadedBy.name}</h2>
          </div>
          <h1 className="px-1 text-sm text-center">{review.parentName}</h1>
        </div>
      </div>
    );
}

export default ReviewCard;
