
import Header from '../../shared/Header/Header';
import Property from '../Realestate/components/ProopertyDetails';
import Formikform from '../Form/components/FormikForm';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';


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