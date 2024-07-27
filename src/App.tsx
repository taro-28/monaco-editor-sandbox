import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

const typeJsCode = `/**
 * @typedef {Object} Data
 * @property {string} Data.name
 * @property {number} Data.age
 */
/**
 * @typedef {Object} Option
 * @property {boolean} Option.isTest
 * @property {string} Option.env
 */
/**
 * @callback JSAction
 * @param {Data} data
 * @param {Option} option
 */
export {}`;

const defaultValue = `/** @type { import("type").JSAction } */
export default async (data, option) => {
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
