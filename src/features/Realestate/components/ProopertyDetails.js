import React, { useEffect, useMemo, useState} from 'react';

import '../../../assets/styles/common.scss';
import '../styles/PropertyDetails.scss';
import PropertyCard from './PropertyCard';

import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../redux/reducers/store';
import { SyncLoader, PacmanLoader } from 'react-spinners';

const Property = (props) => {
    
    // const [filteredResults, setFilteredResults] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const textSelector = useSelector((state) => state);
    // console.log(textSelector, 'textSelectore')

 
    

    useEffect(() => {
        setTimeout(() => {
            
            setIsLoading(true);
        }, 3000);
        
    }, [isLoading])
    
    const propertyDetails = store.getState();
    console.log(propertyDetails, "store");

    const searchItems = (e) => {
       
            dispatch({type: 'TEXT', payLoad: e.target.value})
      
        if (textSelector.name !== '') {
           textSelector.filter = propertyDetails.data.filter((item) => {
              
                return Object.values(item.title).join('').toLowerCase().includes(textSelector.name.toLowerCase());
                
            })
            // setFilteredResults(textSelector.filter);
            // console.log(textSelector.filter, "filtered Data")
        }    
        else{
            // setFilteredResults(propertyDetails)
            return '';
        }

              dispatch({type: 'FILTER', payLoad: textSelector.filter })
        
    }
  

    return (
        <div className='hero'>
            <div className='container'>
                <div className='title-and-search'>
                    <h3>Australia's best investment property deals</h3>
                    <div className='search'>
                        <input type="text" className='search-input' placeholder="search here..." value={ textSelector.name } onChange={searchItems} />
                        
                    </div>
                </div>
                {
                    !isLoading ? <div className='override'><SyncLoader size={20} color={'orange'}/></div> :
                
                <div className='card flex justify--content_space-between'>
                { textSelector.filter.length >= 1 ? (
                    textSelector.filter.map((item) => {
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
                                key={item.id}
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
                }
            </div>
        </div>
    );
};

export default Property;
