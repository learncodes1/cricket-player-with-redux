import React, { lazy, Suspense } from 'react';
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Navbar from "./components/Navbar";

const HomePage = lazy(() => import('./components/HomePage'));
const PlayerFormPage = lazy(() => import('./components/PlayerFormPage'));
const TeamListPage = lazy(() => import('./components/TeamListPage'));
const MatchCreationPage = lazy(() => import('./components/MatchCreationPage'));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        <Navbar/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/player-form" element={<PlayerFormPage/>} />
              <Route path="/team-list" element={<TeamListPage/>} />
              <Route path="/match-creation" element={<MatchCreationPage/>} />
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
