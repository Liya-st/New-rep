import './App.css';
import { useState } from 'react';

export default function Form() {
  const [mainTopic, setMainTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  function addNote() {
    const newNote = {
      mainTopic: mainTopic,
      subTopic: subTopic,
      content: content
    };
    setNotes([...notes, newNote]);
    setMainTopic('');
    setSubTopic('');
    setContent('');
  }

  return (
    <main>
      <form className='note-form'>
      <h2>Take Note</h2>
        <input type='text' placeholder='Main Topic'  className='main-topic' value={mainTopic} onChange={(e) => setMainTopic(e.target.value)}
        />
        <input type='text' placeholder='Sub Topic' className='sub-topic' value={subTopic} onChange={(e) => setSubTopic(e.target.value)}
        />
        <textarea type='text' placeholder='Notes...' className='note-area'  value={content} onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className='btn' onClick={addNote}>  Save
 </button>
      </form>

      <h3>All Notes</h3>
      {notes.map((note) => (
        <div className='notes'>
          <h4>Main Topic: {note.mainTopic}</h4>
          <h4>Sub Topic: {note.subTopic}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </main>
  );
}