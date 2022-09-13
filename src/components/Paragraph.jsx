import React, { useEffect, useState } from "react";
import TextNotation from "./TextNotation";
function Paragraph({ name }) {
  const [internalParagraphState, setInternalParagraphState] = useState("");
  console.log("para running");
  useEffect(() => {
    console.log("an effect is running");
    setInternalParagraphState("para");
  }, []);
  return (
    <>
      <div>Hey this is a new paragraph {name}</div>
      <p>{internalParagraphState}</p>
      <TextNotation />
    </>
  );
}

export default React.memo(Paragraph);
