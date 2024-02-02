import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/notes-form-context'

import './styles.css'

export const Note = ({ id, title, description }) => {
  const { highlight, setHighlight } = useHighlight()
  const { setVisibleForm } = useNoteForm()

  return (
    <div
      className={`note ${highlight === id && 'highlight'}`}
      onClick={() => {
        if (highlight === id) {
          setVisibleForm(false)
          setHighlight(false)
        } else {
          setHighlight(id)
          setVisibleForm(true)
        }
      }}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="description">{description}</p>
    </div>
  )
}
