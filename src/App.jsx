// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Form from './Components/Form/Form'

function App() {


  return (
    <>
      <Header />
      <main className='main_container'>
        <ContactHeader />
        <Form />
      </main>
    </>
  );
}

export default App
