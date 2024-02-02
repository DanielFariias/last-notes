import { ReactNode, createContext, useContext, useState } from 'react'

interface INotesFormContext {
  title: string
  description: string
  visibleForm: boolean
  setTitle: (title: string) => void
  setVisibleForm: (visible: boolean) => void
  setDescription: (description: string) => void
}

const NotesFormContext = createContext({} as INotesFormContext)

export const NotesFormProvider = ({ children }: { children: ReactNode }) => {
  const [visibleForm, setVisibleForm] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <NotesFormContext.Provider
      value={{
        title,
        description,
        visibleForm,
        setTitle,
        setVisibleForm,
        setDescription,
      }}
    >
      {children}
    </NotesFormContext.Provider>
  )
}

export const useNotesForm = () => {
  const context = useContext(NotesFormContext)
  const {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  } = context

  return {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  }
}
