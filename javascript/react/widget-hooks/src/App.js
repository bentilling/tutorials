import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const App = () => {
  const items = [
    { title: 'Great Title', content: 'You should read this!' },
    { title: 'Another Title', content: 'Some content' },
    { title: 'The Best Title', content: 'Even more great stuff to read!' },
  ];
  const options = [
    { title: 'Red', value: 'red' },
    { title: 'Green', value: 'green' },
    { title: 'Blue', value: 'blue' },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [visible, setVisible] = useState(true);

  return (
    <div className="ui segment">
      <button
        className="button"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle Dropdown
      </button>
      {visible ? (
        <Dropdown
          options={options}
          selected={selected}
          onDropdownChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
