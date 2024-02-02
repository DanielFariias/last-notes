import { useNoteForm } from '../../context/notes-form-context'
import { NotesForm } from '../NotesForm'
import './styles.css'

export function NotesArea({ children }) {
  const { visibleForm } = useNoteForm()
  return (
    <article className="notes-area">
      {children}
      {visibleForm && <NotesForm />}
    </article>
  )
}
