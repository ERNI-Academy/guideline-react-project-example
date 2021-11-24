import axios from 'axios';
import { parseFromApiToBrastlewark } from '../shared/models';

export const getGlobalData = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    return parseFromApiToBrastlewark(response?.data);
  } catch (error) {
    alert(error)
  }
}