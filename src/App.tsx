import { useRequest } from './hooks/useRequest';
import { isNumbersPaired } from './https/https';
import CardsLayout from './components/Cards/CardsLayout/CardsLayout';

function App() {
  const { response, errorMessage, isLoading } = useRequest(isNumbersPaired);
  return (
    <div className="App">
      <CardsLayout isLoading={isLoading} showContent={response} errorMessage={errorMessage} />
    </div>
  );
}

export default App;
