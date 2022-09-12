
import Header from '../../../shared/Header/Header';
import Property from '../components/ProopertyDetails';
import Formikform from './FormikForm';
import { Provider } from 'react-redux';
import { store } from '../store/store';


function Main() {
    return (
    <div>
        <Provider store={store}>
            <Header />
            <Property />
            <Formikform />
        </Provider>
        </div>
    );
}

export default Main;