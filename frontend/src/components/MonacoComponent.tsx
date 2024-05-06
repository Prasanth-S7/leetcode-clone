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
            height="370px"
            width="686px"
            theme="vs-dark"
            defaultLanguage="javascript"
            ></Editor>
        </div>
    )
}