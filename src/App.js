import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import './App.css';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100 h-full" >
    <Container>
      <InvoiceForm/>
    </Container>
  </div>
  );
}

export default App;
