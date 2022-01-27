function ReviewPopUp({ children, close }) {
  return (
    <div className=" fixed z-50 h-screen top-0 left-0  w-full flex items-center justify-center">
      <div
        className=" h-screen absolute w-full bg-black bg-opacity-80 cursor-pointer"
        onClick={() => close(false)}
      ></div>
      <div className=" z-50">{children}</div>
    </div>
  );
}

export default ReviewPopUp;
