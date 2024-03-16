import axios from "axios";
import useAuth from "./UseAuth";

const UseRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get(`http://localhost:4000/refresh`, {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log("prev", prev);
      return { ...prev, accessToken: response.data.userprofile.accessToken };
    });
    return response.data.userprofile.accessToken;
  };
  return refresh;
};

export default UseRefreshToken;
