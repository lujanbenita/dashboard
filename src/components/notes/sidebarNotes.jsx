import NotesItem from '../notes/notes'

const SidebarNotes = ({handleNewNote, notes, setNotes, setNote}) => {
  return (
    <div className="notes__sidebar">
      <div className="notes__new-note" onClick={handleNewNote}>
        <span>New Note</span>
      </div>
      <ul className="notes__list">
        {notes.map((item, index) => (
          <NotesItem
            item={item}
            key={index}
            notes={notes}
            setNotes={setNotes}
            setNote={setNote}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarNotes;