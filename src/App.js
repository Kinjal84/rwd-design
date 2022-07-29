import logo from './logo.svg';
import './App.css';
import Header from './shared/Header/Header';
import Property from './components/Realestate/ProopertyDetails';
import PrimariryForm from './components/PrimaryForm/PrimariForm';

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
