import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useNoteForm } from '../../context/notes-form-context'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteList } from '../../context/NoteListContext'

import './styles.css'

export function Actions() {
  const { visibleForm, setVisibleForm, setTitle, setDescription } =
    useNoteForm()
  const { highlight, setHighlight } = useHighlight()
  const { noteList, setNoteList } = useNoteList()

  const handleCreate = () => {
    if (visibleForm && highlight) {
      setTitle('')
      setDescription('')
      setHighlight(false)
    } else {
      setVisibleForm(!visibleForm)
    }
  }

  const handleEdit = () => {
    if (highlight) {
      const highlightedNote = noteList.find((note) => note.id === highlight)

      setTitle(highlightedNote.title)
      setDescription(highlightedNote.description)
      setVisibleForm(!visibleForm)
    }
  }

  const handleDelete = () => {
    if (highlight) {
      setTitle('')
      setDescription('')
      setHighlight(false)
      const highlightedNote = noteList.findIndex(
        (note) => note.id === highlight,
      )
      noteList.splice(highlightedNote, 1)

      setNoteList([...noteList])
    }
  }

  return (
    <div className="actions">
      <button className="create" onClick={handleCreate}>
        <FaPlus className="icon" />
      </button>
      <button className="edit" onClick={handleEdit}>
        <FaPencilAlt className={`icon ${!highlight && 'disabled'}`} />
      </button>
      <button className="delete" onClick={handleDelete}>
        <FaTrash className={`icon ${!highlight && 'disabled'}`} />
      </button>
    </div>
  )
}
