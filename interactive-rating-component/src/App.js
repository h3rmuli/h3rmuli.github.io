import Survey from './components/Survey';
import ThankYou from './components/ThankYou';
import { useSelector } from 'react-redux';

import { selectSurveyResult } from './features/surveyResultSlice';

const App = () => {
  const count = useSelector(selectSurveyResult);

  return (
    <div className="sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto">
      {count === 0 && <Survey />}
      {count !== 0 && <ThankYou />}
    </div>
  );
};

export default App;
