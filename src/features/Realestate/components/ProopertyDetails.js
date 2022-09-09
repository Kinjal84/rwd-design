import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { SyncLoader } from 'react-spinners';

import '../../../assets/styles/common.scss';
import '../styles/PropertyDetails.scss';


import PropertyCard from './PropertyCard';


const Property = (props) => {
    
   
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const textSelector = useSelector((state) => state);
   

    useEffect(() => {
        setTimeout(() => {
            
            setIsLoading(true);
        }, 3000);
        
    }, [isLoading])

    const searchItems = (e) => {

       textSelector.filter = e.target.value;
       dispatch({type: 'TEXT', payLoad: e.target.value});
        
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
                { textSelector.data.length > 0 && 
                    textSelector.data.map((item, index) => {
                     
                        if(textSelector.filter ? item.title.toLowerCase().includes(textSelector.filter) : true){

                            return (
                                <PropertyCard key={index}
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
                    })
                }
                </div>
            }
            </div>
        </div>
    );
};

export default Property;
