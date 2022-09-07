
import Header from '../../shared/Header/Header';
import Property from '../Realestate/components/ProopertyDetails';
import Formikform from '../Form/components/FormikForm';
import { Provider } from 'react-redux';
import { store } from '../../redux/reducers/store';
// import Test from '../Realestate/components/Demo';

function Main() {
    return (
    <div>
        <Provider store={store}>

            <Header />
            <Property />
            <Formikform />
            {/* <PrimariryForm /> */}
        </Provider>
        </div>
    );
}

export default Main;