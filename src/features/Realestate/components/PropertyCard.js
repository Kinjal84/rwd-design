import React from 'react';
import { Link } from 'react-router-dom';

import '../../Realestate/styles/PropertyCard.scss'
import '../../../assets/styles/common.scss';

import { FaBed, FaBath, FaCar } from 'react-icons/fa';

const PropertyCard = (props) => {
    
    
    return (
        <>    
            <div className='property-img-details'>
                <img
                    src={props.img}
                    alt='bedroom'
                    className='bedroom-img'>
                </img>
                <div className='property-info p--10'>
                    <div className='property-name'>
                        <Link to={`/propertycard/${props.id}`} className='link'>
                            <h4>{props.title}</h4>
                        </Link>
                    </div>
                    <div className='property-address'>
                        <p>{props.place}</p>
                    </div>
                    <div className='property-address'>
                        <p>{props.price}</p>
                    </div>
                    <div className='property-detail-main flex justify--content_space-between align--items_center'>
                        <div className='flex'>
                            <div className='property-small-intro'>
                                <FaBed className='property-info-icons' />
                                    {props.bedcount}
                            </div>
                            <div className='property-small-intro'>
                                <FaBath className='property-info-icons' />
                                {props.bath}
                            </div>
                            <div className='property-small-intro'>
                                <FaCar className='property-info-icons' />
                                {props.car}
                            </div>
                        </div>
                        <div className='appartments'>
                            Apartments
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default PropertyCard;
