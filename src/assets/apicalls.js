import axios from 'axios';

const getUserById = async (userId) => {
    try {
      const response = await axios.get(`http://patient-service.localhost/patient/6627b3561963484c08c49862`);
      const user = response.data;
      console.log(user);
      return user;
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
      return null;
    }
  }
  
export { getUserById };