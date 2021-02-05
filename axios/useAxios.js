import defaultAxios from "axios";
import { useEffect, useState } from "react";
//axios http 리퀘스트를 만드는것

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  if (!opts.url) {
    return;
  }
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, []);
  return state;
};

export default useAxios;
