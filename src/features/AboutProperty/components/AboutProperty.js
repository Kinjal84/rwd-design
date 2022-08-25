import '../styles/AboutProperty.scss';
import exteriorPropertyImg from '../../../assets/images/olea-exterior-1200x550-1.webp';
import bedroomImage from '../../../assets/images/olea-bedroom-v2-1200x550.webp';
import livingRoom from '../../../assets/images/olea-livingroom-1200x550-4.webp';
import KitchenDining from '../../../assets/images/olea-kitchen-dining-1200x550.webp';
import gardenImage from '../../../assets/images/olea-garden-new-1200x550.webp';
import { FaBath, FaBed, FaCar, FaHouzz} from 'react-icons/fa';

const AboutProperty = () => {
    return (
        <>
        <div className='main'>
            <div className="header-property">
                <div className='header-wrapper'>
                    <h1>OLEA</h1>
                    <p>50 Kambrook Road, Caulfield North, Victoria 3161</p>
                </div>
            </div>
            <div className='property-images'>
                <div className='images-wrapper'>
                    <div className='property-exterior-design'>
                        <img className="exterior-image" src={exteriorPropertyImg} alt="exterior structure of the property"></img>
                    </div>
                    <div className='inner-design-and-other'>
                        <div className='flex-wrapper-image'>
                            <div className='img12-left'>
                                <div className='bedroom-img'>
                                    <img src={bedroomImage} alt="bedroom">
                                    </img>
                                </div>
                                <div className='livingroom-img'>
                                    <img src={livingRoom} alt="livingroom">
                                    </img>
                                </div>

                            </div>
                            <div className='img34-left'>
                                <div className='kitchen-dining-img'>
                                    <img src={KitchenDining} alt="kitchen-dining">
                                    </img>
                                </div>
                                <div className='garden-img'>
                                    <img src={gardenImage} alt="garden">
                                    </img>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-section'>
                <div className='description-header'>
                        <h2 className='title'>About OLEA</h2>
                </div>

                <div className='address'>
                    <p>50 Kambrook Road, Caulfield North, Victoria 3161</p>
                </div>

                <div className='bhk-detail'>
                
                        <div className='property-small-intro'>
                            <FaBed className='property-info-icons' />1-3
                        </div>
                        <div className='property-small-intro'>
                            <FaBath className='property-info-icons' />1-3
                        </div>
                        <div className='property-small-intro'>
                            <FaCar className='property-info-icons' />1-2
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
                        <p>Brand New 1, 2 & 3 Bedroom Apartments & Premium Townhouses.</p>
                        <p>Olea is a distinctive structure, yet sits perfectly within its neighbourhood, complementing the surrounding period homes and the quiet tree-lined street. 3 and 4 bedroom townhouses and 1, 2 and 3 bedroom apartments have been meticulously incorporated into the footprint, dressed in materials sympathetic to the area.</p>
                        <p>
                        Olea Homes anchor the building to its neighbourhood, with separate entries emulating free-standing residences, further enhanced by the brick facades common to the area’s traditional homes. The beauty of Olea Homes lies in its honest, complementary relationship with the streets and houses that surround it. It brings you into the neighbourhood, and makes it easy to fall in love with the style, quality and sheer liveability of your home.
                        </p>
                        <p>Considering Caulfield’s fame as one of Australia’s premier racing venues, the area itself has evolved in its own way. It has excellent access to public transport and roads, putting you at the centre of Melbourne’s best - from parks and reserves, beaches, shopping and retail, education and everyday amenities and services.</p>
                        <p>Moments from fabulous Caulfield Park and Caulfield Racecourse, Olea prides itself on presenting a life that is rich in style and comfort, atmosphere and opportunity. With a community of like-minded residents enjoying the landscaped shared spaces, and a larger community to be found in the suburb itself, it really will feel like coming home. Discover what life can be at Olea.</p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default AboutProperty;