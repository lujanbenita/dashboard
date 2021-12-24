import React from 'react';

const NoteEdition = ({note, handleSelect, handleOnChangeNote }) => {

  return (
    <div className="notes__edition">
      {note === undefined ? <div>Please select a Note or New Note.</div>
        :
        <>
        <div className="notes__color">
          <div className="notes__color-title">Change Note Color</div>
          <select className="green" name="noteType" value={note.noteType} onChange={handleSelect(note)}>
            <option value="red">Warning</option>
            <option value="violet">Info</option>
            <option value="yellow">Danger</option>
            <option value="blue">Primary</option>
            <option value="green">Success</option>
          </select>
        </div>

        <div className="notes__edition-note">
          <div className="notes__edition-note-title">Edit Note</div>
            <textarea
              className="notes__edition-note-text green"
              onChange={handleOnChangeNote(note)}
              value={note.note}
            />
            
        </div>
      </>
      }

    </div>
  );
};

export default NoteEdition;