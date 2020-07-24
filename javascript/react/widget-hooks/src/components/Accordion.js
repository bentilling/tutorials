import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedItems = items.map((item, i) => {
    const active = activeIndex === i ? 'active' : '';
    return (
      <React.Fragment key={i}>
        <div className={`title ${active}`} onClick={() => setActiveIndex(i)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui accordion styled">{renderedItems}</div>;
};

export default Accordion;
