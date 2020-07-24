import React from 'react';
import Accordion from './components/Accordion';

const App = () => {
  const items = [
    { title: 'Great Title', content: 'You should read this!' },
    { title: 'Another Title', content: 'Some content' },
    { title: 'The Best Title', content: 'Even more great stuff to read!' },
  ];

  return (
    <div className="ui segment">
      <Accordion items={items} />
    </div>
  );
};

export default App;
