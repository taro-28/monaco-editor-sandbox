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

const exampleUserJsCode = `/**
 * @param {Object} args
 * @param {string} args.name
 * @param {number} args.age
 * @returns {Promise<{ name: string, age: number }>}
 */
export const createUser = (args) => {};`;

const defaultValue = `import { createUser } from "@example/user";

/** @type { import("type").JSAction } */
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
    monaco?.editor.createModel(
      exampleUserJsCode,
      "javascript",
      monaco.Uri.parse("@example/user.js"),
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
