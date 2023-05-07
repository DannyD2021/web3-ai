import * as React from 'react';
import styled from '@emotion/styled';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Chat from './pages/Chat';
import NoMatch from './pages/NoMatch';
import './global.css';


export default function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Chat />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}
