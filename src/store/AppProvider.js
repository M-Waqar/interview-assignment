import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "../reducers/AppReducer";
import getUsers from "../services/UserService";
import { LOAD_USERS } from "../actions/Actions";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {});
  useEffect(() => {
    const apiConfig = {
      page: 1,
      count: 20,
    };
    const fetchData = async () => {
      return await getUsers(apiConfig);
    };
    fetchData()
      .then((resp) => {
        if (resp.status === true) {
          dispatch({
            type: LOAD_USERS,
            payload: {
              count: resp.data.info.results,
              page: resp.data.info.page,
              results: resp.data.results, // local list of users
              apiResults: resp.data.results, // api list of users
            },
          });
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
