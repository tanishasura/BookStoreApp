import axios from 'axios';

export const hostedApi = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

const Api = {};
Api.getAllBooks = async () => await hostedApi.get( '/book' );


Api.signup = async (name, email, password) => {
  try {
    const response = await hostedApi.post('/user/signup', {
      name,
      email,
      password
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
Api.login = async (email, password) => {
  try {
    const response = await hostedApi.post('/user/login', {
      email,
      password
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Api.login = async (email, password) => await hostedApi.post('/user/login', { email, password });

export default Api;
