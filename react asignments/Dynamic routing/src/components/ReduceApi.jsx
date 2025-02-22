import React, { useEffect, useReducer } from "react";
import { data } from "react-router-dom";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const getData_reducer = (state, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        loading: true,
        data: [],
        error: false,
      };
    case "FULFILLED":
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case "REJECTED":
      return {
        loading: false,
        data: [],
        error: true,
      };
  }
};

const ReduceApi = () => {
  // const [data, setData] = useState([])
  const [state, dispatch] = useReducer(getData_reducer, initialState);

  useEffect(() => {
    dispatch({ type: "PENDING" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: "FULFILLED", payload: res });
      })
      .catch((err) => {
        dispatch({ type: "REJECTED" });
      });
  }, []);

  const { loading, data, error } = state;

  return (
    <div>
      <h1>Reduce Api</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        data.map((ele) => {
          ele.name;
        })
      )}
    </div>
  );
};

export default ReduceApi;
