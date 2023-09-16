import "./App.css";
import { useState, useCallback } from 'react';
import Button from "./components/UI/Button";
import ParagraphOutput from "./components/Output/ParagraphOutput"

function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);

  const toggleParagraph = useCallback(() => {
    setIsParagraphShown(prev => !prev);
  }, []);

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown={isParagraphShown} />
      <Button onClick={toggleParagraph}>Показать / Скрыть</Button>
    </div>
  );
}

export default App;
