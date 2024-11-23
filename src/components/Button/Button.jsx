/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './Button.css';
import { useState } from 'react';

export default function Button({ text, fetchPath = null, directPath = '/' }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (fetchPath) {
      setIsLoading(true);
      try {
        const response = await fetch(fetchPath);
        const data = await response.json();
        const id = data.id;
        console.log(data);

        if (id && /^[1-9]{4}$/.test(id)) {
          navigate(`/${id}`);
        } else {
          alert('Invalid ID received.');
        }
      } catch (error) {
        console.error('Failed to fetch ID:', error);
        alert('Failed to fetch data, pls try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      navigate(directPath);
    }
  };

  return (
    <button disabled={isLoading} onClick={handleClick} className="home-button">
      {isLoading ? 'Connecting...' : text}
    </button>
  );
}
