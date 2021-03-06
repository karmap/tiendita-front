import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (body) => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="error">
            {err.response.data.message}
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;