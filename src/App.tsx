import { Providers } from './Providers';
import { Router } from '@reach/router';
import { Calculate } from 'pages';

function App() {
  return (
    <Providers>
      <Router>
        <Calculate path="/" />
      </Router>
    </Providers>
  );
}

export default App;
