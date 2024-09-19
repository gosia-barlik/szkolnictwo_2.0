
## Steps

#### Install and Setup

- npm install
- npm run dev

#### SPA

SPA stands for Single-Page Application, which is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.

React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.

[React Router](https://reactrouter.com/en/main)

```sh
npm i react-router-dom@6.11.2
```

App.jsx

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

#### Setup Pages

- pages are components
- create src/pages
- About, Error, HomeLayout, Landing, index.js
- export from index.js

pages/index.js

```js
export { default as Landing } from './Landing';
export { default as About } from './About';
export { default as HomeLayout } from './HomeLayout';
export { default as Error } from './Error';
```

App.jsx

```js
import {
  HomeLayout,
  About,
  Landing,
  Error,
} from './pages';
```

#### Link Component

HomeLayout.jsx

```js
import { Link } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Link to='/about'>About</Link>
    </div>
  );
};
export default HomeLayout;
```

About.jsx

```js
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to='/'>Back Home</Link>
    </div>
  );
};
export default About;
```

#### Nested Pages

App.jsx

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
```

HomeLayout.jsx

```js
import { Link, Outlet } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
```

App.jsx

```js
{
  index:true
  element: <Landing />,
}
```

#### Navbar

- create components/Navbar.jsx

Navbar.jsx

```js
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <span className='logo'></span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- setup in HomeLayout

#### Styled Components


#### Assets


#### About Page


#### Fetch

- useEffect approach

Landing.jsx

```js
const fetchSomething = async () => {
  try {
    const response = await axios.get('/someUrl');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchSomething();
}, []);
```

#### Loader

Each route can define a "loader" function to provide data to the route element before it renders.

- must return something even "null" otherwise error

Landing.jsx

```js
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'something';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
};
export default Landing;
```

```js
import { loader as landingLoader } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
      },
      // alternative approach
      {
        index: true,
        loader: () => {
          // do stuff here
        },
        element: <Landing />,

      },
      // rest of the routes
    ],
  },
]);
```

#### Landing - Fetch 

Landing.jsx

```js
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const qualificationSearchUrl =
  'https://';

export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${qualificationSearchUrl}${searchTerm}`);
  return { qualifications: response.data.qualification, searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  return <h1>Landing page</h1>;
};

export default Landing;
```

- empty search term returns some default drinks
- if search term yields not drinks drinks:null

#### More Errors

- no return from loader
- wrong url

App.jsx

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <h2>There was an error...</h2>,
        element: <Landing />,
      },
    ],
  },
]);
```

#### SinglePageError Component

- create pages/SinglePageError.jsx
- export import (index.js)
- use it in App.jsx

```js
import { useRouteError } from 'react-router-dom';
const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return <h2>{error.message}</h2>;
};
export default SinglePageError;
```

#### Setup React Toastify

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </React.StrictMode>
);
```