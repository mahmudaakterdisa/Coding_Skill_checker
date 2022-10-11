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
import { questionloder, Questionloder } from './Loder/Questionloder';
import Questions from './Component/Question/Questions';

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
          path: 'topics',
          // loader: Questionloder,
          element: <Topics></Topics>
        },
        {
          path: '/course/:courseId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)

          },

          element: <Questions></Questions>
        },
        {
          path: 'statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },


      ]

    },

    {
      path: '*',
      element: <div><h1>page not found</h1></div>
    }

  ])
  return (
    <div className="App">

      <RouterProvider router={route} />
    </div>
  );
}

export default App;
