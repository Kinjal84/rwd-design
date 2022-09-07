import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './shared/Header/Header';
import Property from './features/Realestate/components/ProopertyDetails'
// import PrimariryForm from './features/form/components/PrimariForm';
import Formikform from './features/Form/components/FormikForm';
import Main from './features/main/Main';
import { Route, Routes, useParams } from 'react-router';
import AboutProperty from './features/AboutProperty/components/AboutProperty';
import uuid from 'react-uuid';

function App() {
//     const express = require('express');
//     const path = require('path');
//     const app = express();

//     app.use(express.static(path.join(__dirname, 'build')));

//     app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000);

    return (
        <div>
            
            <Routes >
                <Route path="/" element={<Main />} />
                <Route path="/propertycard/:id" element={<AboutProperty />} />
            </Routes>
        </div>
    );
}
export default App;
