
import reachingImg from '../../static/img/page-cards/reaching.png';
import doingImg from '../../static/img/page-cards/doing.png';
import beingImg from '../../static/img/page-cards/being.png';
import dreamingImg from '../../static/img/page-cards/dreaming.png';
import reachingTriangleImg from '../../static/img/page-cards/reaching_triangle.png';
import doingTriangleImg from '../../static/img/page-cards/doing_triangle.png';
import beingTriangleImg from '../../static/img/page-cards/being_triangle.png';
import dreamingTriangleImg from '../../static/img/page-cards/dreaming_triangle.png';

export const REACHING = 'reaching';
export const DOING = 'doing';
export const BEING = 'being';
export const DREAMING = 'dreaming';

const linkerize = (l) => `/${l}`;

const getTopLevelLinksObj = () => {
  const linksObj = {
    [REACHING]: {
      id: REACHING,
      text: REACHING,
      link: linkerize(REACHING),
      img: reachingImg,
      imgTriangle: reachingTriangleImg,
      innerNavList: [
        {text: "Wht If culture", linkTarget: 'culture'},
        {text: "History ", linkTarget: 'about-us'},
        {text: "Get involved", linkTarget: 'participate'},
      ], 
    },
    [DOING]: {
      id: DOING,
      text: DOING,
      link: linkerize(DOING) + '/negev/location',
      img: doingImg,
      imgTriangle: doingTriangleImg,
      innerNavList: [
        {text: "Wht If Negev", linkTarget: 'negev/location'},
        {text: "Wht If Sinai", linkTarget: 'sinai/location'},
        {text: "Gatherings", linkTarget: 'gatherings'},
        {text: "Retreats", linkTarget: 'retreats'},
      ],
      innerNavTabNavigationList: [
        {text: "Location", linkTarget: 'location'},
        {text: "Guide", linkTarget: 'guide'},
        {text: "Participate", linkTarget: 'participate'},
        {text: "Tickets", linkTarget: 'tickets'},
      ],
    },
    [BEING]: {
      id: BEING,
      text: BEING,
      link: linkerize(BEING) + '/culture',
      img: beingImg,
      imgTriangle: beingTriangleImg,
      innerNavList: [
        {text: "Wht If culture", linkTarget: 'culture'},
        {text: "History ", linkTarget: 'about-us'},
        {text: "Get involved", linkTarget: 'participate'},
      ],
    },
    [DREAMING]: {
      id: DREAMING,
      text: DREAMING,
      link: linkerize(DREAMING) + '/dream-system',
      img: dreamingImg,
      imgTriangle: dreamingTriangleImg,
      innerNavList: [
        {text: "Dream system", linkTarget: 'dream-system'},
        {text: "Global blog", linkTarget: 'global-blog'},
      ],
    },
  };
  return linksObj;
}

const getTopLevelLinksList = () => {
  const linksObj = getTopLevelLinksObj();
  return Object.keys(linksObj).reduce((accumulator, key) => {
    return accumulator.concat(linksObj[key]);
  }, []);
}
const getTopLevelLinksListOrder2 = () => {
  const lo = getTopLevelLinksObj();
  return [lo[DOING],lo[BEING],lo[DREAMING],lo[REACHING],];
}

const linksService = {
  getTopLevelLinksObj,
  getTopLevelLinksList,
  getTopLevelLinksListOrder2,
};

export default linksService;
