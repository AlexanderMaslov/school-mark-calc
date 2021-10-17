import { Providers } from './Providers';
import { Router } from '@reach/router';
import { CalculateContainer } from 'pages';

function App() {
  return (
    <Providers>
      <Router>
        <CalculateContainer path="/" />
      </Router>
    </Providers>
  );
}

export default App;
