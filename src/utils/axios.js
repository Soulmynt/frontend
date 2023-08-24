import axios from "axios";

const baseURL = "localhost:4000";

async function axiosSignIn(email, handle, password, keyGen) {
  try {
    let data = await axios.post(`${baseURL}/signin`, {
      email: email,
      handle: handle,
      password: password,
      keygen: keyGen,
    });
    return data;
  } catch (e) {
    const errorlog = { error: e };
    return errorlog;
  }
}

export {axiosSignIn};
