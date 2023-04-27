import React from 'react';
import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/HomePage/HomePage';
import { AddUserPage } from 'pages/AddUserPage';


export const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>} />
    <Route path="add" element={<AddUserPage/>}/>
       </Route>
   </Routes>
  );
};
