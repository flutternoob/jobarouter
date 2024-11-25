import {/* BrowserRouter, */ createBrowserRouter, createRoutesFromElements, /* Routes, Link, NavLink,  */Route, RouterProvider} from 'react-router-dom'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout'

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />} action={contactAction}/>
        </Route>

        <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
          <Route 
            index 
            element={<Careers />} 
            loader={careersLoader} 
          />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>

        <Route path="*" element={<NotFound />}/>
      </Route>
  )
)

function App() {
  return (
    /* <BrowserRouter>
    <header>
      <nav>
        <h1>Jobarouter</h1>
        <Link to="/">Home</Link>
        <NavLink to="About">About</NavLink>
      </nav>
    </header> */
    <RouterProvider router={router} />
    /* </BrowserRouter> */
  );
}

export default App
