import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { ThemeProvider } from "./context/ThemeProvider";
import WeatherDashboard from "./pages/WeatherDashboard";
import City from "./pages/City";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <WeatherDashboard />,
      },
      {
        path: "/city/:cityName",
        element: <City />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
