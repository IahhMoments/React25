import { EXAMPLES } from "../data.js";
import { useState } from "react";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>examples</h2>
      <menu>
        <TabButton
          isActive={selectedTopic === "components"}
          onSelect={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isActive={selectedTopic === "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isActive={selectedTopic === "props"}
          onSelect={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isActive={selectedTopic === "state"}
          onSelect={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
