import commonService from './commonService';
import { NUMBER_MAX, NUMBER_MIN, NUMBER_SELECTED_COUNT } from './../constant';

const getBall = () => {
  return commonService.getRandomNumberInRange(NUMBER_MAX, NUMBER_MIN, NUMBER_SELECTED_COUNT);
};


const ballDrawService = {
  getBall,
};
export default ballDrawService;
