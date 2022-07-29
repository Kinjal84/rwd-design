import React from 'react';
import bedroom from '../../../assets/images/bedroom.jpg';
import LiveCity from '../../../assets/images/LiveCity.jpg';
import LiveCity2 from '../../../assets/images/LiveCity2.jpg';
import '../../../assets/styles/common.scss';
import '../Realestate/PropertyDetails.scss';
import { FaBath, FaBed, FaCar } from 'react-icons/fa';
// import city from '../../assets/images/images(1).jpg';

const Property = () => {
    const propertyDetails = {
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
    // console.log(propertyDetails.information[0].img);
    return (
        <div className='hero'>
            <div className='container'>
                <div className='title'>
                    <h3>Australia's best investment property deals</h3>
                </div>
                <div className='card flex justify--content_space-between'>
                    {propertyDetails.information.map((info) => (
                        <div className='property-img-details ' key={info.title}>
                            <img
                                src={info.img}
                                alt='bedroom'
                                className='bedroom-img'></img>
                            <div className='property-info p--10'>
                                <div className='property-name'>
                                    <h4>{info.title}</h4>
                                </div>
                                <div className='property-address'>
                                    <p>{info.place}</p>
                                </div>
                                <div className='property-address'>
                                    <p>{info.price}</p>
                                </div>
                                <div className='property-detail-main flex justify--content_space-between align--items_center'>
                                    <div className='flex'>
                                        <div className='property-small-intro'>
                                            <FaBed className='property-info-icons' />
                                            {info.bedcount}
                                        </div>
                                        <div className='property-small-intro'>
                                            <FaBath className='property-info-icons' />
                                            {info.bath}
                                        </div>
                                        <div className='property-small-intro'>
                                            <FaCar className='property-info-icons' />
                                            {info.car}
                                        </div>
                                    </div>
                                    <div className='appartments'>
                                        Apartments
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Property;
