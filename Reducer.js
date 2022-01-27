export const initialState = {
  user: "",
  category: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.category,
      };
    case "DELETE_USER":
      localStorage.clear();
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
