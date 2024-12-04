
import ApiService from "./Api.service";


export const sendOtpRequest = async (email) => {
  try {
    const data = { email };
    const response = await ApiService.ApiCall({
      url: '/auth/forgot-password', 
      method: 'POST',
      data,
    });
    return response;
  } catch (error) {
    console.error('Error sending OTP request:', error);
    throw error;
  }
};

export const verifyOtpRequest = async (email, otp) => {
  try {
    const data = { email, otp };
    const response = await ApiService.ApiCall({
      url: '/auth/verify-otp',
      method: 'POST',
      data,
    });
    return response;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};

export const changePasswordRequest = async (email, otp, newPassword) => {
  try {
    const data = { email, otp, newPassword };
    const response = await ApiService.ApiCall({
      url: '/auth/reset-password',
      method: 'POST',
      data,
    });
    return response;
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
};

export const sendLoginRequest = async (email, password) => {
  try {
    const data = { email, password }; 
    const response = await ApiService.ApiCall({
      url: '/auth/login', 
      method: 'POST',   
      data,               
    });
    return response; 
  } catch (error) {
    console.error('Error in login:', error);
  
    throw new Error(error.response?.data?.message || 'Failed to login. Please try again.');
  }
};


