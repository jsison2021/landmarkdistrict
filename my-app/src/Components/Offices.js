import React, { useEffect } from 'react';
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas, faPhone } from '@fortawesome/free-solid-svg-icons'
import Animation from './pageAnimations/Animation'
import OfficesAnimation from './pageAnimations/OfficesAnimation'
import officesData from '../data/offices.json'

function Offices() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Animation></Animation>
            <OfficesAnimation></OfficesAnimation>

            <div className='shopPage'>
                <div className='businessGrid'>
                    {officesData.offices.map((office, index) => (
                        <motion.div
                            key={office.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className='businessCard'
                        >
                            <div className='businessImageContainer'>
                                <img
                                    src={office.logo}
                                    className="businessImage"
                                    alt={office.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className='businessInfo'>
                                <h3 className='businessName'>{office.name}</h3>
                                <span className='businessCategory'>Office</span>
                                <p className='businessDetail'>
                                    <FontAwesomeIcon icon={faLocationDot} /> {office.address}
                                </p>
                                {office.website && (
                                    <p className='businessDetail'>
                                        <FontAwesomeIcon icon={faEarthAmericas} />{' '}
                                        <a className="weblink" href={office.website} target="_blank" rel="noopener noreferrer">
                                            Website
                                        </a>
                                    </p>
                                )}
                                {office.phone && (
                                    <p className='businessDetail'>
                                        <FontAwesomeIcon icon={faPhone} /> {office.phone}
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

export default Offices;
