import axios from "axios";
import useAuth from "./UseAuth";

const UseRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    //const response = await axios.get(`http://localhost:4000/refresh`, {
    // withCredentials: true,
    //});
    //setAuth((prev) => {
    //console.log("refresh token response", response.data);
    //console.log("prev", prev);
    //return { ...prev, accessToken: response.data.userProfile.accessToken };
    //});
    //return response.data.userProfile.accessToken;
    console.log("refresh token", document.cookie);
  };
  return refresh;
};

export default UseRefreshToken;
