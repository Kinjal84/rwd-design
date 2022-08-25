import logo from './logo.svg';
import './App.css';
import Header from './shared/Header/Header';
import Property from './features/Realestate/components/ProopertyDetails'
// import PrimariryForm from './features/form/components/PrimariForm';
import Formikform from './features/Form/components/FormikForm';
import Main from './features/main/Main';
import { Route, Routes } from 'react-router';
import AboutProperty from './features/AboutProperty/components/AboutProperty';

function App() {
    return (
        <div>
            {/* <Header />
            <Property />
            <Formikform /> */}
            <Routes >
                <Route path="/" element={<Main />} />
                <Route path="/propertydetails" element={<AboutProperty/>} />
            </Routes>
            
            {/* <PrimariryForm /> */}
        </div>
    );
}

export default App;
