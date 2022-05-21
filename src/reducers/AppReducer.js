import {
  FETCH_USERS,
  DELETE_USER,
  LOAD_USERS,
  FILTER_USER,
} from "../actions/Actions";

const AppReducer = (state, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, ...action.payload };
    case FETCH_USERS:
      return {
        ...state,
        page: action.payload.page,
        results: [...state.results, ...action.payload.results],
        apiResults: [...state.apiResults, ...action.payload.apiResults],
      };
    case FILTER_USER:
      return { ...state, results: [...action.payload.results] };
    case DELETE_USER:
      return {
        ...state,
        results: [...action.payload.results],
        apiResults: [...action.payload.apiResults],
      };
    default:
      return state;
  }
};

export default AppReducer;
