import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

  const showDropdown = () => {
    return (
      <div>
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
            label="Pick a Colour"
          />
        ) : null}
      </div>
    );
  };
  return (
    <div className="ui segment">
      <Translate />
    </div>
  );
};

export default App;
