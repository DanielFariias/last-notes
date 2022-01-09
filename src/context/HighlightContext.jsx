import { createContext, useContext, useState } from "react";

const HighlightContext = createContext()

// Component
export const HighlightProvider = ({ children }) => {
  const [highlight, setHighlight] = useState(false)

  return (
    <HighlightContext.Provider
      value={{
        highlight,
        setHighlight
      }}
    >
      {children}
    </HighlightContext.Provider>
  )
}

// hook
export const useHighlight = () => {
  const context = useContext(HighlightContext)
  const { highlight, setHighlight } = context

  return {
    highlight,
    setHighlight
  }
}