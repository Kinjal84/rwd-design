import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import bedroom from '../../../assets/images/olea-livingroom-12                   
import { createStore } from 'redux';
import propertyReducer from '../../../redux/reducers/PropertyReducer';
import '../../../assets/styles/common.scss';
import '../styles/PropertyDetails.scss';
import { FaBath, FaBed, FaCar, FaSearch } from 'react-icons/fa';
// import city from '../../assets/images/images(1).jpg';

const Property = () => {

    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
  

    const store = createStore(propertyReducer);
    // console.log(store.getState());
    const propertyDetails = store.getState();
    // const propertyDetails = {
    //     information: [
    //         {
    //             title: 'OLEA',
    //             place: 'Caulfield North, Victoria',
    //             img: bedroom,
    //             bedcount: '1-3',
    //             bath: '1-3',
    //             car: '1-2',
    //         },
    //         {
    //             title: 'Live City',
    //             place: 'Footscray, Victoria',
    //             img: LiveCity,
    //             bedcount: '1-3',
    //             bath: '1-2',
    //             car: '0-2',
    //         },
    //         {
    //             title: 'Victoria & Albert, Broadbeach',
    //             place: 'Broadbeach Queensland',
    //             img: LiveCity2,
    //             bedcount: '1-3',
    //             bath: '1-3',
    //             car: '1-2',
    //             price: 'from $649,000',
    //         },
    //     ],
    // };
    // console.log(propertyDetails.information[0].img);

    // function search(propertyDetails){

    // }

    const searchItems = (e) => {
        const keyword = e.target.value;
        setSearchInput(keyword);
        console.log(searchInput);
        if (keyword !== '') {
            const filteredData = propertyDetails.information.filter((item) => {
                return Object.values(item.title).join('').toLowerCase().startsWith(keyword.toLowerCase());
                
            })
            console.log(filteredData, "filtered Data")
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(propertyDetails.information)
        }
    }

    return (
        <div className='hero'>
            <div className='container'>
                <div className='title-and-search'>
                    <h3>Australia's best investment property deals</h3>
                    <div className='search'>
                        <input type="text" className='search-input' placeholder="search here..." value={searchInput} onChange={searchItems} />
                        
                    </div>
                </div>
                <div className='card flex justify--content_space-between'>
                {searchInput.length >= 1 ? (
                    filteredResults.map((item) => {
                    return (

                    <div className='property-img-details' key={item.title}>
                            
                            <img
                                src={item.img}
                                alt='bedroom'
                                className='bedroom-img'>
                                </img>
                            
                            <div className='property-info p--10'>
                                <div className='property-name'>
                                    <Link to='/propertydetails' className='link'>
                                        <h4>{item.title}</h4>
                                    </Link>
                                </div>
                                <div className='property-address'>
                                    <p>{item.place}</p>
                                </div>
                                <div className='property-address'>
                                    <p>{item.price}</p>
                                </div>
                                <div className='property-detail-main flex justify--content_space-between align--items_center'>
                                    <div className='flex'>
                                        <div className='property-small-intro'>
                                            <FaBed className='property-info-icons' />
                                            {item.bedcount}
                                        </div>
                                        <div className='property-small-intro'>
                                            <FaBath className='property-info-icons' />
                                            {item.bath}
                                        </div>
                                        <div className='property-small-intro'>
                                            <FaCar className='property-info-icons' />
                                            {item.car}
                                        </div>
                                    </div>
                                    <div className='appartments'>
                                        Apartments
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    })):(

                        propertyDetails.information.map((item) => (
                        <div className='property-img-details' key={item.title}>
                            
                            <img
                                src={item.img}
                                alt='bedroom'
                                className='bedroom-img'>
                                </img>
                            
                            <div className='property-info p--10'>
                                <div className='property-name'>
                                    <Link to='/propertydetails' className='link'>
                                        <h4>{item.title}</h4>
                                    </Link>
                                </div>
                                <div className='property-address'>
                                    <p>{item.place}</p>
                                </div>
                                <div className='property-address'>
                                    <p>{item.price}</p>
                                </div>
                                <div className='property-detail-main flex justify--content_space-between align--items_center'>
                                    <div className='flex'>
                                        <div className='property-small-intro'>
                                            <FaBed className='property-info-icons' />
                                            {item.bedcount}
                                        </div>
                                        <div className='property-small-intro'>
                                            <FaBath className='property-info-icons' />
                                            {item.bath}
                                        </div>
                                        <div className='property-small-intro'>
                                            <FaCar className='property-info-icons' />
                                            {item.car}
                                        </div>
                                    </div>
                                    <div className='appartments'>
                                        Apartments
                                    </div>
                                </div>
                            </div>
                        </div>
                       )
                    )
                )}
                </div>
            </div>
        </div>
    );
};

export default Property;
