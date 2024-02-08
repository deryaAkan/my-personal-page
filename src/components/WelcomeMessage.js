import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WelcomeMessage = () => {
  useEffect(() => {
    toast.success('Sayfama hoş geldiniz!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  return (
    <div>
    </div>
  );
};

export default WelcomeMessage;