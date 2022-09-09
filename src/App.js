
import Main from './features/main/Main';
import { Route, Routes } from 'react-router';
import AboutProperty from './features/AboutProperty/components/AboutProperty';

function App() {
    return (
        <div>
            
            <Routes >
                <Route path="/" element={<Main />} />
                <Route path="/propertyCard/:id" element={<AboutProperty />} />
            </Routes>
        </div>
    );
}
export default App;
