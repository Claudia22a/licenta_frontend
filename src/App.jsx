import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AddBaby from './pages/AddBaby';
import { useContext } from 'react';
import { AuthContext } from './context/Auth/AuthContext';
import EditBaby from './pages/EditBaby';
import AddLogEntry from './pages/AddLogEntry';
import AddMeasurement from './pages/AddMeasurement/AddMeasurement';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          {!user && <Route path="/" element={<Landing />} />}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Private routes */}
          {user && (
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          )}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-baby"
            element={
              <PrivateRoute>
                <AddBaby />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-baby/:id"
            element={
              <PrivateRoute>
                <EditBaby />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-log-entry"
            element={
              <PrivateRoute>
                <AddLogEntry />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-measurement"
            element={
              <PrivateRoute>
                <AddMeasurement />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
