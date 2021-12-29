import NoteEdition from '../components/notes/noteEdition';
import SidebarNotes from '../components/notes/sidebarNotes';
import UseNotes from '../hooks/useNotes';
import LayoutDashboard from '../layout/layoutDashboard';

const Notes = () => {

  const {
    notes,
    note,
    setNote,
    setNotes,
    handleSelect,
    handleNewNote,
    handleOnChangeNote,
  } = UseNotes()

  return (
    <LayoutDashboard footer={false}  title={"NOTES"}>
      <div className="notes">
          <h3>Simple notes</h3>
          <section className="notes__simples">
            <SidebarNotes
              handleNewNote={handleNewNote}
              notes={notes}
              setNotes={setNotes}
              setNote={setNote}
            />

            <NoteEdition
              note={note}
              handleSelect={handleSelect}
              handleOnChangeNote={handleOnChangeNote}
            />
          </section>

      </div>
    </LayoutDashboard>
  );
};

export default Notes;