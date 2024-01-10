import axios from "axios";
import Cookies from "js-cookie";

const apiValue = axios.create({
  baseURL: "http://localhost:4500/api/v1", // Replace with your apiValue base URL
  headers: {
    "Content-Type": "application/json",
  },
});

const my_access_token = Cookies.get("accessToken");
// const my_refresh_token = Cookies.get('refreshToken');

// Request interceptor
apiValue.interceptors.request.use(
  (config) => {
    // You can modify the request configuration here
    // For example, you can add an authorization token
    const accessToken = my_access_token;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
apiValue.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  async (error) => {
    // Handle response error
    if (error.response && error.response.status === 401) {
      // Token expired, attempt to refresh
      const newAccessToken = await refreshAccessToken();
      error.config.headers.Authorization = `Bearer ${newAccessToken}`;
      return apiValue.request(error.config);
    }
    return Promise.reject(error);
  }
);

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    // Make a request to your authentication endpoint with the refresh token
    const response = await axios.get(
      "http://localhost:3000/apiValue/v1/newGenerateAccessToken"
    );

    // Update the access token with the new one
    return response.data.accessTokenValue;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
}

export const authService = {
  login: () => apiValue.get(`/signup1`),
  // logout: () => axios.post(`${BASE_URL}/logout`),
  // ... other auth-related methods
};

export {apiValue}
