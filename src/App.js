import "./App.css";
import { useState } from 'react';
import Button from "./components/UI/Button";

function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);

  const toggleParagraph = () => {
    setIsParagraphShown(prev => !prev);
  };

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      {isParagraphShown && <p>New Paragraph</p>}
      <Button onClick={toggleParagraph}>Показать / Скрыть</Button>
    </div>
  );
}

export default App;
