
import Header from '../../shared/Header/Header';
import Property from '../Realestate/components/ProopertyDetails';
import Formikform from '../Form/components/FormikForm';
// import Test from '../Realestate/components/Demo';

function Main() {
    return (
        <div>
            <Header />
            <Property />
            <Formikform />
            {/* <PrimariryForm /> */}
        </div>
    );
}

export default Main;