//@ts-nocheck
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
export default function MonacoComponent({onChange,code}){
    const [value, setValue] = useState(code || "");

    const handleEditorChange = (value) => {
      setValue(value);
      onChange("code", value);
    };
    return(
        <div>
            <Editor 
            onChange={handleEditorChange}
            height="100vh"
            width="720px"
            theme="vs-dark"
            defaultLanguage="javascript"
            ></Editor>
        </div>
    )
}