import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Topics from './Component/Topics/Topics';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import AvaiableTopics from './Component/Courses/AvaiableTopics';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,


        },
        {
          path: 'Topics',
          element: <Topics></Topics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },


      ]

    }

  ])
  return (
    <div className="App">

      <RouterProvider router={route} />
    </div>
  );
}

export default App;
