import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const App = () => {
  const items = [
    { title: 'Great Title', content: 'You should read this!' },
    { title: 'Another Title', content: 'Some content' },
    { title: 'The Best Title', content: 'Even more great stuff to read!' },
  ];

  return (
    <div className="ui segment">
      <Search />
    </div>
  );
};

export default App;
