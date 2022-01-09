import { createContext, useContext, useState } from "react";

const NoteListContext = createContext()

// Component
export const NoteListProvider = ({ children }) => {
  const [noteList, setNoteList] = useState([])

  return (
    <NoteListContext.Provider
      value={{
        noteList,
        setNoteList
      }}
    >
      {children}
    </NoteListContext.Provider>
  )
}

// hook
export const useNoteList = () => {
  const context = useContext(NoteListContext)
  const { noteList, setNoteList } = context

  return {
    noteList,
    setNoteList
  }
}