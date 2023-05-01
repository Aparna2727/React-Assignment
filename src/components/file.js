import React from "react";
import { useRef } from "react";
import "./file.css";

export function FileUseRef() {
  const inputRef = useRef(null);

  function PickHandleFile() {

    // let fileRef = document.querySelector("#file-Ref")
    // fileRef.click()

    inputRef.current.click();
  }
  return (
    <div className="container">
      <input id="file-Ref" type="file" ref={inputRef} />

      <button onClick={PickHandleFile}>picke the file</button>
    </div>
  );
}
