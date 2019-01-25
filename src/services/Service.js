
import { CONFIG } from '@config/config';

export const getHotels = () => {
  return fetch(CONFIG.API_URL + CONFIG.PREFIX + '/hotels', {
        method: 'GET'
  });
};
