import { Actions } from "./components/Actions";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Notes } from "./components/Notes";
import { NotesArea } from "./components/NotesArea";
import { HighlightProvider } from "./context/HighlightContext";
import { NoteFormProvider } from "./context/NoteformContext";
import { NoteListProvider } from "./context/NoteListContext";

export function App() {
  return (
    <NoteFormProvider>
      <NoteListProvider>
        <HighlightProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes />
          </NotesArea>
        </HighlightProvider>
      </NoteListProvider>
    </NoteFormProvider>
  )
}
