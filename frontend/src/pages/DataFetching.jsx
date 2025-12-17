import FetchAPI from '../examples/data-fetching/FetchAPI';
import AxiosExample from '../examples/data-fetching/AxiosExample';
import AsyncAwait from '../examples/data-fetching/AsyncAwait';
import CustomHookFetch from '../examples/data-fetching/CustomHookFetch';

function DataFetching() {
  return (
    <div>
      <h1>Data Fetching & Async Operations</h1>
      
      <div className="card">
        <h2>1. Fetch API</h2>
        <FetchAPI />
      </div>

      <div className="card">
        <h2>2. Axios Library</h2>
        <AxiosExample />
      </div>

      <div className="card">
        <h2>3. Async/Await</h2>
        <AsyncAwait />
      </div>

      <div className="card">
        <h2>4. Custom Hook for Data Fetching</h2>
        <CustomHookFetch />
      </div>
    </div>
  );
}

export default DataFetching;

