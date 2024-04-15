import React from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import TelaPrincipal from "./components/TelaPrincipal";
import TelaPosts from "./components/TelaPosts";
import TelaUsuarios from "./components/TelaUsuarios";
import TelaFotos from "./components/TelaFotos";

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-red-800 to-red-500 text-white p-4 text-center">
        <h1 className="text-3xl">CHECKPOINT 2</h1>
      </header>
    <nav>
      <ul className="flex justify-center space-x-4 p-3">
        <li className="font-bold"><Link to = '/main' className="hover:text-blue-500">HOME</Link></li>
        <li className="font-bold"><Link to = '/posts' className="hover:text-blue-500">POSTS</Link></li>
        <li className="font-bold"><Link to = '/users' className="hover:text-blue-500">USUÁRIOS</Link></li>
        <li className="font-bold"><Link to = '/photos' className="hover:text-blue-500">FOTOS</Link></li>
      </ul>
    </nav>
    <main className="flex-grow bg-white">
    <Routes>
    <Route path="/main" element={<TelaPrincipal/>}/>
    <Route path="/posts" element={<TelaPosts/>}/>
    <Route path="/users" element={<TelaUsuarios/>}/>
    <Route path="/photos" element={<TelaFotos/>}/>
    </Routes>
    </main>
    <footer className="bg-gradient-to-r from-red-800 to-red-500 text-white p-4 text-center">
      <p className="text-2xl">© 2024 Kayque Ferreira dos Santos - RM552605 - 1TDSZ - Github: https://github.com/kayquesann</p>
    </footer>

      
    </div>
    </Router>
  )
}
export default App;
