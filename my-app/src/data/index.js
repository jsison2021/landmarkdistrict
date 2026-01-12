// Data access layer for Landmark District application
import shopsData from './shops.json';
import officesData from './offices.json';
import residencesData from './residences.json';
import config from './config.json';

export const getShops = () => shopsData.shops;
export const getOffices = () => officesData.offices;
export const getResidences = () => residencesData.residences;
export const getConfig = () => config;
export const getContactInfo = () => config.contact;
export const getLocationInfo = () => config.location;
export const getAboutInfo = () => config.about;
