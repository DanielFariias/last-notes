import { createContext, useContext, useState } from "react";

const NoteFormContext = createContext()

// Component
export const NoteFormProvider = ({ children }) => {
  const [visibleForm, setVisibleForm] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <NoteFormContext.Provider
      value={{
        visibleForm,
        setVisibleForm,
        title,
        setTitle,
        description,
        setDescription
      }}
    >
      {children}
    </NoteFormContext.Provider>
  )
}

// hook
export const useNoteForm = () => {
  const context = useContext(NoteFormContext)
  const {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription
  } = context

  return {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription
  }
}