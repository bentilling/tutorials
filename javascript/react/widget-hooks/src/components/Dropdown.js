import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {
  const { options, selected, onDropdownChange } = props;
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onDropdownChange(option);
        }}
      >
        {option.title}
      </div>
    );
  });

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setVisible(false);
    };
    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);
  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select Colour</label>
        <div
          className={`ui selection dropdown ${visible ? 'visible active' : ''}`}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.title}</div>
          <div className={`menu ${visible ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
