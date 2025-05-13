import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/globals.css" 
import {HashRouter} from "react-router-dom"
import NotesApp from './NotesApp';
import { MainContent } from './Components/Notes Comp/MainContent';
import { Header } from './Components/Notes Comp/Header';
import { CreateNote } from './Components/Notes Comp/CreateNote';

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <AppPrac />,
//       children: [{
//           path: "/blog-posts",
//           element: <BlogPosts />
//       }]
//     },
//     {
//       path: "/users",
//       element: <div>User's Dashboard</div>
//     },
//     {

//     }
// ])



// const router = createBrowserRouter([{
//   path: "/",
//   element: <NotesApp />,
//   children: [{
//     path: "/create-note",
//     element: <CreateNote />
//   },{
//     path: "/main-notes",
//     element: <MainContent />
//   }]
// }])


const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <HashRouter>
  <NotesApp />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
