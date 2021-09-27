import { Providers } from './Providers';
import { Router } from '@reach/router';
import { CalculateContainer } from 'pages';

const AUTH_TOKEN =
  'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5MDE5NzQiLCJhdWQiOiIyOjIiLCJuYmYiOjE2MzIzNDM3NzcsIm1zaCI6ImIwYzYyZmE4LWE3YmMtNGQzZi04OWZlLTI5OGFhZmE5ODlkNyIsImlzcyI6Imh0dHBzOlwvXC9zY2hvb2wubW9zLnJ1IiwicmxzIjoiezI6WzIxOjI6W10sMzE6NDpbXSw0MToxOltdXX0iLCJyZ24iOmZhbHNlLCJleHAiOjE2MzMyMDc3NzcsImlhdCI6MTYzMjM0Mzc3NywianRpIjoiZGQwNzdkMWQtYzdlOS00ODIxLTg3N2QtMWRjN2U5YjgyMWYxIiwic3NvIjoiOTQwYTEzOTctMDlmYy00MjdlLTlmMDAtNzkzYTE4NGJlOTRjIn0.e92ugdfQa-l89k9H4FFaIAh9WEc8bxlMPcAvgt7CA4k-7sZasenJ7VQDU4E9vW-l-cmbRMRyCv742eGXK92PllFOfGRd-f4MBWPC_gfF6bqznF5MBWwWEj8NWyabx19jcjO2IDMgfO3nljJ_HZFxxKh_BM_2wnpQpctmOwnhaCDUOU0pPLLScCAlMSrQFYeJsxdqOKplY4ioelUesSWK8-yDU5ClO22jrDkDrduqdFYjC43FZ-eZd7TaUzLwhUSu9yJogmNFx6Gwcp2nIQB1d_by7O1rRjuKQ1DnAqXopHZ1OTlI8X6MiORNuqFTFM4_Qxvla0PUcGaqMaqYK0A6rw';
const ACADEMIC_YEAR_ID = 9;
const STUDENT_PROFILE_ID = 5808863;

function App() {
  return (
    <Providers>
      <Router>
        <CalculateContainer
          path="/"
          token={AUTH_TOKEN}
          academicYearId={ACADEMIC_YEAR_ID}
          studentProfileId={STUDENT_PROFILE_ID}
        />
      </Router>
    </Providers>
  );
}

export default App;
