import {SMALL_SCREEN_MAX_SIZE} from '../constants/globals';


const getMapSizesToProps = () => ({ width }) => ({
  smallScreen: width <= SMALL_SCREEN_MAX_SIZE,
});


const deviceService = {
  getMapSizesToProps,
};

export default deviceService;
