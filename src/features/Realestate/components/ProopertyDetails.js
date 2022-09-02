import React, { useState} from 'react';

import { legacy_createStore as createStore } from 'redux';
import propertyReducer from '../../../redux/reducers/PropertyReducer';
import '../../../assets/styles/common.scss';
import '../styles/PropertyDetails.scss';
import PropertyCard from './PropertyCard';
// import { searchPlace } from '../../../redux/actions/searchActions';
// import { useSelector } from 'react-redux';

const Property = (props) => {
    
    const [searchInput, setSearchInput] = useState('');
    // const [filteredResults, setFilteredResults] = useState([]);


    const store = createStore(propertyReducer);
    const propertyDetails = store.getState();
    console.log(propertyDetails, "store");
  
    
    const searchItems = (e) => {
        // const keyword = e.target.value;
        const keyword = propertyDetails.initialText = e.target.value;

        setSearchInput(keyword);
        // searchPlace(keyword);
        // console.log(searchPlace, "dbsjkdh");
        // if (keyword !== '') {
        //     const filteredData = propertyDetails.data.filter((item) => {
              
        //         return Object.values(item.title).join('').toLowerCase().includes(keyword.toLowerCase());
                
        //     })
        //     setFilteredResults(filteredData);
        //     // console.log(filteredData, "filtered Data")
        // }    
        // else{
        //     setFilteredResults(propertyDetails)
        // }
        propertyDetails.inputText = propertyDetails.data.filter((item) => {
              
            return Object.values(item.title).join('').toLowerCase().includes(keyword.toLowerCase());
            
        })
    }
   console.log( propertyDetails.inputText, "filterData");
    

    return (
        <div className='hero'>
            <div className='container'>
                <div className='title-and-search'>
                    <h3>Australia's best investment property deals</h3>
                    <div className='search'>
                        <input type="text" className='search-input' placeholder="search here..." value={propertyDetails.initialText } onChange={searchItems} />
                        
                    </div>
                </div>
                <div className='card flex justify--content_space-between'>
                {propertyDetails.inputText.length >= 1 ? (
                    propertyDetails.inputText.map((item) => {
                        return (
                            <PropertyCard key={item.id}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                place={item.place}
                                price={item.price}
                                bedcount={item.bedcount}
                                bath={item.bath}
                                car={item.car}
                            />         
                        )
                    }))
                    :(
                        propertyDetails.data.map((item) => {
                            return (
                                <PropertyCard 
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    place={item.place}
                                    price={item.price}
                                    bedcount={item.bedcount}
                                    bath={item.bath}
                                    car={item.car}
                                 />
                            )
                        }
                       
                    )

             )} 
                </div>
            </div>
        </div>
    );
};

export default Property;
