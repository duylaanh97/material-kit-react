import axios from 'axios';
import CONFIG from '../constants/config';

export const getSignInAdmin = async () => {
    const response = await axios({
      method: 'POST',
      url: `${CONFIG.BASE_URL}/admin/users/action/login.php`,
      withCredentials: true,
    });
    return response.data;
  };
  
