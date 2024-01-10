import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Students from './Students/Students'
import AllStudents from './Students/AllStudents'
import { Provider } from 'react-redux'
import store from './store/Store'
import FormWrapper from './form/FormWrapper'
const App = () => {
  return (
    <>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Students />}>
            <Route path='/AllStudents' element={<AllStudents />} />
            <Route path='/FormWrapper' element={<FormWrapper />} />
          </Route>
        </Routes>
      </Router>
      </Provider>
    </>
  )
}

export default App