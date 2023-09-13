import Survey from './components/Survey';
import ThankYou from './components/ThankYou';
import { useSelector } from 'react-redux';

import { selectSurveyResult } from './features/surveyResultSlice';

const App = () => {
  const count = useSelector(selectSurveyResult);

  return (
    <div>
      {count === 0 && <Survey />}
      {count !== 0 && <ThankYou />}
    </div>
  );
};

export default App;
