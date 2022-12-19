import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    let r_text = new Array();
    r_text[0] = '"This is a test"';
    r_text[1] = '"This is another"';
    r_text[2] = '"This is a test"';
    r_text[3] = '"This is another"';

    var i = Math.floor(r_text.length * Math.random());
    setText(r_text[i])
  },[])

  return (
    <div>
      <div>
        site title
      </div>
      <p>{text}</p>
    </div>
  );
}

export default App;