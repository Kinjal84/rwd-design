import logo from './logo.svg';
import './App.css';
import Header from './shared/Header/Header';
import Property from './features/Realestate/components/ProopertyDetails'
import PrimariryForm from './features/form/components/PrimariForm';

function App() {
    return (
        <div>
            <Header />
            <Property />
            <PrimariryForm />
        </div>
    );
}

export default App;
