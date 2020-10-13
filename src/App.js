import React, { useState } from 'react';
import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# Render markdown here');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      {/* we can use two following ways to create markdown component */}
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
