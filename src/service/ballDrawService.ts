import commonService from './commonService';
import { NUMBER_MAX, NUMBER_MIN } from './../constant';

// const getBalls = () => {
//   return commonService.getRandomNumberInRange(NUMBER_MAX, NUMBER_MIN, NUMBER_SELECTED_COUNT);
// };

const getOneBall = () => {
  return commonService.getOneRandomNumberInRange(NUMBER_MAX, NUMBER_MIN);
};

const ballDrawService = {
  getOneBall
};
export default ballDrawService;
