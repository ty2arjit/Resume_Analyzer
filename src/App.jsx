import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <Navbar />
    </div>
  );
}

export default App;