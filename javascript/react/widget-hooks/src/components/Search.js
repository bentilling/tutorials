import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          origin: '*',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = () => {
    return results.map((result) => {
      return (
        <div className="item" key={result.pageid}>
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui ceiled list">{renderedResults()}</div>
    </div>
  );
};

export default Search;
