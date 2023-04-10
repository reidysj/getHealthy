import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

//Page imports
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import GoalsForm from "./pages/GoalsForm";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route
          path="/"
          element={localStorage.getItem("token") ? <Dashboard /> : <Homepage />}
        />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals/add"
          element={
            <ProtectedRoute>
              <GoalsForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
