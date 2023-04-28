import { useRequest } from './hooks/useRequest';
import { isNumbersPaired } from './https/https';
import CardsLayout from './components/Cards/CardsLayout/CardsLayout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const { response, errorMessage, isLoading } = useRequest(isNumbersPaired);
  return (
    <div className="App">
      <ErrorBoundary>
        <CardsLayout isLoading={isLoading} showContent={response} errorMessage={errorMessage} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
