import "./App.css";
import { Editor } from "./components";
import { EditorProvider } from "@tiptap/react";
import { useEditorProps } from "./components/editor";
function App() {
  const editorProps = useEditorProps()
  return <div className="h-[100dvh] bg-[#f5f1f1] flex flex-col justify-center items-center gap-4 p-8">
    <EditorProvider editable={true} {...editorProps}>
      <Editor/>
    </EditorProvider>
  </div>;
}

export default App;
