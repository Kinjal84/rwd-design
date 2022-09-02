import bedroom from '../../assets/images/Olea/olea-livingroom-1200x550-4.webp';
import LiveCity from '../../assets/images/LiveCity/1live-city_exterior_cut_1200x550__original.webp';
import LiveCity2 from '../../assets/images/Victoria/qtva0017_v-a_a-d_gallery_1200x550px_08__original.webp';


const propertyDetail = 
    {

            initialText : '',

            data: [
    
                {
                    id: 1,
                    title: 'OLEA',
                    place: 'Caulfield North, Victoria',
                    img: bedroom,
                    bedcount: '1-3',
                    bath: '1-3',
                    car: '1-2',
                },
                {
                    id: 2,
                    title: 'Live City',
                    place: 'Footscray, Victoria',
                    img: LiveCity,
                    bedcount: '1-3',
                    bath: '1-2',
                    car: '0-2',
                },
                {
                    id: 3,
                    title: 'Victoria & Albert, Broadbeach',
                    place: 'Broadbeach Queensland',
                    img: LiveCity2,
                    bedcount: '1-3',
                    bath: '1-3',
                    car: '1-2',
                    price: 'from $649,000',
                },
                
                    
            ],
            inputText : [],
        
    }

const propertyReducer = (state= propertyDetail , action) => {
    switch(action.type){
        case 'SEARCH_PLACE' : 
        return {
            ...state,
            initialText : action.payload,
        }
        default:
            return state;
    }
}

export default propertyReducer;