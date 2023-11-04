
import Headers from "./components/Headers"
import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import NextPage from "./components/NextPage";

function App() {

  const Router = createBrowserRouter([
   
   
    {
      path: '/',
      element: <Headers />
    },
    {
      path: '/nextPage',
      element: <NextPage />
    },

  
  ])

  return (
    <div className="App">
      <RouterProvider router={Router}>
        <Headers />
      </RouterProvider>

    </div>
  );
}

export default App;
