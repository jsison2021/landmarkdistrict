import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Animation from './pageAnimations/Animation'
import ShopsAnimation from './pageAnimations/ShopsAnimation'
import shopsData from '../data/shops.json'

function Shops() {
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'food-beverage', label: 'Food & Beverage' },
        { id: 'retail', label: 'Retail' },
        { id: 'service', label: 'Services' }
    ];

    const filteredShops = activeCategory === 'all'
        ? shopsData.shops
        : shopsData.shops.filter(shop => shop.category === activeCategory);

    return (
        <div>
            <Animation></Animation>
            <ShopsAnimation></ShopsAnimation>

            {/* Category Filter Buttons */}
            <div className='categoryFilter'>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`filterButton ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className='shopPage'>
                <div className='businessGrid'>
                    {filteredShops.map((shop, index) => (
                        <motion.div
                            key={shop.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className='businessCard'
                        >
                            <div className='businessImageContainer'>
                                <img
                                    src={shop.logo}
                                    className="businessImage"
                                    alt={shop.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className='businessInfo'>
                                <h3 className='businessName'>{shop.name}</h3>
                                <span className='businessCategory'>{
                                    shop.category === 'food-beverage' ? 'Food & Beverage' :
                                    shop.category === 'retail' ? 'Retail' : 'Service'
                                }</span>
                                <p className='businessDetail'>
                                    <FontAwesomeIcon icon={faLocationDot} /> {shop.address}
                                </p>
                                {shop.website && (
                                    <p className='businessDetail'>
                                        <FontAwesomeIcon icon={faEarthAmericas} />{' '}
                                        <a className="weblink" href={shop.website} target="_blank" rel="noopener noreferrer">
                                            Website
                                        </a>
                                    </p>
                                )}
                                {shop.phone && (
                                    <p className='businessDetail'>
                                        <FontAwesomeIcon icon={faPhone} /> {shop.phone}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shops;
