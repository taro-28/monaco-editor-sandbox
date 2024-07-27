import Editor from "@monaco-editor/react";

function App() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue={`// some comment
const x = 3;`}
    />
  );
}

export default App;
