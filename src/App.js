import "./App.css";
import { useState, useCallback } from 'react';
import Button from "./components/UI/Button";
import ParagraphOutput from "./components/Output/ParagraphOutput"

function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);
  const [isTogglingActivated, setIsTogglingActivated] = useState(false);

  const toggleParagraph = useCallback(() => {
    if (isTogglingActivated) {
      setIsParagraphShown(prev => !prev);
    }
  }, [isTogglingActivated]);

  const activateToggling = () => {
    setIsTogglingActivated(prev => !prev);
  };

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown={isParagraphShown} />
      <Button onClick={activateToggling}>Активировать переключение</Button>
      <Button onClick={toggleParagraph}>Показать / Скрыть</Button>
    </div>
  );
}

export default App;
