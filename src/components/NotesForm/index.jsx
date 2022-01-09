import { useEffect } from 'react';
import { FaBan, FaCheck } from 'react-icons/fa'
import { useNoteForm } from '../../context/NoteformContext';
import { useNoteList } from '../../context/NoteListContext';
import { useHighlight } from '../../context/HighlightContext'

import './styles.css';

export function NotesForm() {
  const { noteList, setNoteList } = useNoteList()
  const { highlight, setHighlight } = useHighlight()
  const {
    title,
    setTitle,
    description,
    setDescription
  } = useNoteForm()

  useEffect(() => {
    saveLocalNotes()
  }, [noteList])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (highlight) {
      noteList.map(note => {
        if (note.id === highlight) {
          note.title = title
          note.description = description
        }
      })
      setHighlight(false)
      setNoteList([...noteList])
    } else {
      setNoteList(state => [
        ...state,
        {
          id: String(Math.floor(Math.random() * 10000)),
          title,
          description
        }
      ])
    }
    clearForm()
  }

  const clearForm = () => {
    setTitle('')
    setDescription('')
  }

  const saveLocalNotes = () => {
    localStorage.setItem('notes', JSON.stringify(noteList))
  }

  return (
    <form className='menu'>
      <div>
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Informe um titulo"
        />
      </div>
      <div>
        <label htmlFor="note">Descrição</label>
        <textarea
          rows="10"
          id="note"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escreva a sua nota"
        />
      </div>
      <div className="buttons">
        <button
          type="button"
          className="cancel"
          onClick={clearForm}
        >
          <FaBan className="icon" />
        </button>
        <button
          type="submit"
          className="confirm"
          onClick={handleSubmit}
        >
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  )
}