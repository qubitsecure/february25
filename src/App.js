import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Home';
import RootLayout from './layouts/RootLayout';
import Portraits from './layouts/Portraits'; 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} /> {/* This sets Home as the default route */}
      <Route path="/Home" element={<Home />} />
      <Route path="/Portraits" element={<Portraits />} />
    </Route>
  )
);




function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
