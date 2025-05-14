import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/globals.css" 
import {HashRouter} from "react-router-dom"
import NotesApp from './NotesApp';
import { MainContent } from './Components/Notes Comp/MainContent';
import { Header } from './Components/Notes Comp/Header';
import { CreateNote } from './Components/Notes Comp/CreateNote';


const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <HashRouter>
  <NotesApp />
  </HashRouter>
);


 
