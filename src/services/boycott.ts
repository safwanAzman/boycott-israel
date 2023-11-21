
import axios  from '@/helpers/axios';

export const getBoyCottData = async ():Promise<any> => {
    const response = await axios.get(`api/boycott-index`);
    return response.data;
};
