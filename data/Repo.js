const buttons = {
  green:
    "px-2 py-3 rounded-md border bg-green-500 text-white hover:bg-green-600",
  pink: "px-2 py-3 rounded-md  bg-pink-500 text-white hover:bg-pink-600 m-1",
  lightwhite:
    "px-2 py-3 rounded-md  bg-white bg-opacity-50 text-white hover:bg-opacity-70 m-1",
  red: "px-2 py-3 rounded-md border bg-red-500 text-white hover:bg-red-600 my-1 w-full",
  yellow:
    "px-2 py-3 rounded-md  bg-yellow-500 text-white hover:bg-yellow-600 my-1 w-full",
  gray: "px-2 py-3 rounded-md  bg-gray-500 text-white my-1 w-full mx-4",
  inputStyle: "h-12 border border-red-400 w-full px-3",
  inputStyleDark: "h-12 w-full px-3 bg-black bg-opacity-30 my-1",
  forgotButton:
    "w-full h-12 appearance-none focus:outline-none rounded-md bg-purple-100 px-3 text-black",
  loginButton:
    "bg-purple-700 text-gray-100 p-4 w-full rounded-md tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-purple-800 shadow-lg",
};

const comp = {
  headerColor:
    "text-3xl  border border-gray-500 px-2 py-4 rounded-md shadow-md bg-opacity-10 bg-white",
};

const components = {
  header: (text) => <h1 className={comp.headerColor}>{text}</h1>,
};
export { buttons, comp, components };
