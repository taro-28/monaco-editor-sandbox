import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

const typeJsCode = `/**
 * @typedef {Object} Data
 * @property {string} name
 * @property {number} age
 */
export {}`;

const defaultValue = `/**
 * @param { import("type").Data } data
 */
export default async (data) => {
  return {
    name: data.name,
    age: data.age
  };
};;`;

function App() {
  const monaco = useMonaco();

  useEffect(() => {
    monaco?.editor.createModel(
      typeJsCode,
      "javascript",
      monaco.Uri.parse("type.js"),
    );
  }, [monaco]);
  return (
    <Editor
      height="90vh"
      language="javascript"
      defaultValue={defaultValue}
      path="main.js"
    />
  );
}

export default App;
