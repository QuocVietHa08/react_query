import './App.css';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import axios from 'axios'

function App() {

  return (
      <div className="App">
        <Number />
        <Example />
      </div>
  );
}

export default App;

function useTodo(){
 return useQuery('todos',() =>
   axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
  )
}
function Number(){
  const number = useTodo();
  return <div> Your name length are {number?.data?.length} names</div>
}
function Example(){
  const result = useTodo()  
  console.log(result)

  if(result.isFetching){ return "Loading..."}

  if(result.isError){ return "Error.." }

  return (
    <div>
      <div>
        hello this is me 
          {result?.data?.map(item => 
              <div>{item.name}</div> 
          )}
          {result.isFetching ? "Updating" : null}
      </div>
    </div>

  );
}
