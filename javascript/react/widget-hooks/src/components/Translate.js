import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  { title: 'Afrikaans', value: 'af' },
  { title: 'Arabic', value: 'ar' },
  { title: 'Hindi', value: 'hi' },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Text to Translate</label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <Dropdown
        options={options}
        selected={language}
        onDropdownChange={setLanguage}
        label="Select Language"
      />
      <hr />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
