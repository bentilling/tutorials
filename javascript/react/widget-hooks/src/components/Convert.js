import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = (props) => {
  const { language, text } = props;
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const getTranslated = async () => {
      const res = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );
      setTranslated(res.data.data.translations[0].translatedText);
    };
    getTranslated();
  }, [language, debouncedText]);

  return (
    <div>
      <h3>Output</h3>
      <p>{translated}</p>
    </div>
  );
};

export default Convert;
