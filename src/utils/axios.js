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
  try {
    let data = await axios.post(`http://localhost:4000/usersignin`, {
      email: email,
      password: password,
    });
    return data;
  } catch (e) {
    const errorlog = { data: { error: e } };
    return errorlog;
  }
}


export async function axiosRefresh(email) {
  // Create a Try Catch where we will try to get an object returned from an axios post to our backend's login route.  We will send a req object containing the user's email and password we gathered from the component's state.  if the connection is successful, we will return the res object returned.  Then we will create a catch which will return the error encountered.
  try {
    let data = await axios.post(`http://localhost:4000/refresh`, {
      email: email,
    });
    return data;
  } catch (e) {
    const errorlog = { data: { error: e } };
    return errorlog;
  }
}


export async function axiosCreateCompany(accessToken, companyInfo) {
  // Create a Try Catch where we will try to get an object returned from an axios post to our backend's login route.  We will send a req object containing the user's email and password we gathered from the component's state.  if the connection is successful, we will return the res object returned.  Then we will create a catch which will return the error encountered.
  try {
    let data = await axios.post(`http://localhost:4000/createcompany`, {
      AccessToken: accessToken,
      companyInfo: companyInfo,
    });
    return data;
  } catch (e) {
    const errorlog = { data: { error: e } };
    return errorlog;
  }
}

export async function axiosUpdateCompanyJoinCode(token, companyId) {
  // Create a Try Catch where we will try to get an object returned from an axios post to our backend's login route.  We will send a req object containing the user's email and password we gathered from the component's state.  if the connection is successful, we will return the res object returned.  Then we will create a catch which will return the error encountered.
  try {
    let data = await axios.post(`http://localhost:4000/updatecommunityjoincode`, {
      token: token,
      companyId: companyId,
    });
    return data;
  } catch (e) {
    const errorlog = { data: { error: e } };
    return errorlog;
  }
}


export async function axiosCreateCredential(token, credentialInfo) {
  // Create a Try Catch where we will try to get an object returned from an axios post to our backend's login route.  We will send a req object containing the user's email and password we gathered from the component's state.  if the connection is successful, we will return the res object returned.  Then we will create a catch which will return the error encountered.
  try {
    let data = await axios.post(`http://localhost:4000/createcredential`, {
      token: token,
      CredentialInfo: credentialInfo,
    });
    return data;
  } catch (e) {
    const errorlog = { data: { error: e } };
    return errorlog;
  }
}

export async function axiosJoinCommunity(token, company, joinToken) {
  // Create a Try Catch where we will try to get an object returned from an axios post to our backend's login route.  We will send a req object containing the user's email and password we gathered from the component's state.  if the connection is successful, we will return the res object returned.  Then we will create a catch which will return the error encountered.
  try {
    let data = await axios.post(`http://localhost:4000/joincompany`, {
      token: token,
      company: company,
      joinToken, joinToken
    });
    return data;
  } catch (e) {
    const errorlog = { data: { error: e } };
    return errorlog;
  }
}










export async function setupAxiosInterceptor(setAuth) {
  axios.interceptors.response.use(
    response => response,
    async error => {
      if (error.response && error.response.status === 401 && !error.config._retry) {
        error.config._retry = true;
        try {
          // Assuming '/auth/refresh' is the endpoint that refreshes the access token
          const response = await axios.post('/auth/refresh');
          
          // Update the auth state with the new access token
          setAuth(prevAuth => ({
            ...prevAuth,
            accessToken: response.data.accessToken,
          }));

          // Set the new access token on the original request and retry it
          error.config.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
          return axios(error.config);
        } catch (refreshError) {
          // Handle the case where the refresh token is no longer valid
          setAuth({}); // Clear the auth state
          window.location.href = '/login'; // Redirect to the login page
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
}
