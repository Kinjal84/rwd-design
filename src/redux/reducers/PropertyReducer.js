import bedroom from '../../assets/images/olea-livingroom-1200x550-4.webp';
import LiveCity from '../../assets/images/1live-city_exterior_cut_1200x550__original.webp';
import LiveCity2 from '../../assets/images/qtva0017_v-a_a-d_gallery_1200x550px_08__original.webp';


const propertyDetail = {
    information: [
        {
            title: 'OLEA',
            place: 'Caulfield North, Victoria',
            img: bedroom,
            bedcount: '1-3',
            bath: '1-3',
            car: '1-2',
        },
        {
            title: 'Live City',
            place: 'Footscray, Victoria',
            img: LiveCity,
            bedcount: '1-3',
            bath: '1-2',
            car: '0-2',
        },
        {
            title: 'Victoria & Albert, Broadbeach',
            place: 'Broadbeach Queensland',
            img: LiveCity2,
            bedcount: '1-3',
            bath: '1-3',
            car: '1-2',
            price: 'from $649,000',
        },
    ],
};

const propertyReducer = (state= propertyDetail, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default propertyReducer;