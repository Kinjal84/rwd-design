import '../styles/AboutProperty.scss';
import { FaBath, FaBed, FaCar, FaHouzz} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { useEffect, useState } from 'react';


import propertyReducer from '../../../redux/reducers/PropertyReducer';
import { HashLoader } from 'react-spinners';


import '../../../assets/styles/common.scss';

const override = {
    display: "flex",
    alignItems: 'center',
    height: '100vh',
    margin: "0 auto",
    borderColor: "red",
    textAlign: 'center',
  };


const AboutProperty = () => {

    let { id } = useParams();
 
    const [isLoading, setIsLoading] = useState(true);
    const [filterData, setfilteredData] = useState({});

    const store = createStore(propertyReducer);
    const propertyDetails = store.getState();
  
    
    useEffect(() => {
        propertyDetails.detailData.map((data) => {
            if(data.id.toString() === id){
                setfilteredData(data);
            
            }else{
                return '';
            }
        })
        setTimeout(() => {
            
            setIsLoading(true);
        }, 3000);
        setIsLoading(false);    
    }, [])


    return (
        <>
        
        {!isLoading ? <div><HashLoader size={70} color={'orange'} cssOverride={override}/></div> : 
        <div className='main aboutPage'>
            <div className='wrapper'>

                <div className="header-property">
                    <div className='header-wrapper'>
                        <h1>{filterData.title}</h1>
                            <p>{filterData.Address}</p>
                            </div>
                                </div>
                                <div className='property-images' >
                                    <div className='images-wrapper'>
                                        <div className='property-exterior-design'>
                                            <img className="exterior-image" src={filterData.exteriorPropertyImg} alt="exterior structure of the property"></img>
                                        </div>
                                        <div className='inner-design-and-other'>
                                            <div className='flex-wrapper-image'>
                                                <div className='img12-left'>
                                                    <div className='bedroom-img'>
                                                        <img src={filterData.bedroomImage} alt="bedroom">
                                                        </img>
                                                    </div>
                                                    <div className='livingroom-img'>
                                                        <img src={filterData.livingRoom} alt="livingroom">
                                                        </img>
                                                    </div>

                                                </div>
                                                <div className='img34-left'>
                                                    <div className='kitchen-dining-img'>
                                                        <img src={filterData.KitchenDining} alt="kitchen-dining">
                                                        </img>
                                                    </div>
                                                    <div className='garden-img'>
                                                        <img src={filterData.gardenImage} alt="garden">
                                                        </img>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='description-section'>
                                    <div className='description-header'>
                                            <h2 className='title'>{filterData.subTitle}</h2>
                                    </div>

                                    <div className='address'>
                                        <p>{filterData.Address}</p>
                                    </div>

                                    <div className='bhk-detail'>
                                    
                                            <div className='property-small-intro'>
                                                <FaBed className='property-info-icons' />{filterData.bedcount}
                                            </div>
                                            <div className='property-small-intro'>
                                                <FaBath className='property-info-icons' />{filterData.bath}
                                            </div>
                                            <div className='property-small-intro'>
                                                <FaCar className='property-info-icons' />{filterData.car}
                                            </div>
                                    </div>
                                    <div className='home-type'>
                                        <div className='property-type'>
                                        <FaHouzz className='property-info-icons' />Property-type
                                        </div>
                                        <div className='type-appartment'>
                                        Appartments
                                        </div>
                                    </div>

                                    <div className='selling-para'>
                                        <div className='selling-title'>
                                            <h3>Now Selling - Register Now</h3>
                                        </div>
                                        <div className='para'>
                                            <p>{filterData.descriptionP1}</p>
                                            <p>{filterData.descriptionP2}</p>
                                            <p>{filterData.descriptionP3}</p>
                                            <p>{filterData.descriptionP4}</p>
                                            <p>{filterData.descriptionP5}</p>
                                        </div>
                                    </div>
                                </div>
            </div>  
            </div>
            }
        
        
        </>
    )
}

export default AboutProperty;