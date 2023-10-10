import axios from "axios";

const baseURL = "http://localhost:4000";

export async function axiosSignIn(email, handle, password, keyGen) {
  try {
    let data = await axios.post(`http://localhost:4000/usersignup`, {
      email: email,
      handle: handle,
      password: password,
      keygen: keyGen,
    });
    return data;
  } catch (e) {
    const errorlog = { data: { error: e } };
    return errorlog;
  }
}

export async function axiosLogIn(email, password) {
  // Create a Try Catch where we will try to get an object returned from an axios post to our backend's login route.  We will send a req object containing the user's email and password we gathered from the component's state.  if the connection is successful, we will return the res object returned.  Then we will create a catch which will return the error encountered.
}
