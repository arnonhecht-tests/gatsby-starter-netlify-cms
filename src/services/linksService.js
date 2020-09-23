
import reachingImg from '../../static/img/page-cards/reaching.png';
import doingImg from '../../static/img/page-cards/doing.png';
import beingImg from '../../static/img/page-cards/being.png';
import dreamingImg from '../../static/img/page-cards/dreaming.png';
import reachingTriangleImg from '../../static/img/page-cards/reaching_triangle.png';
import doingTriangleImg from '../../static/img/page-cards/doing_triangle.png';
import beingTriangleImg from '../../static/img/page-cards/being_triangle.png';
import dreamingTriangleImg from '../../static/img/page-cards/dreaming_triangle.png';

const REACHING = 'reaching';
const DOING = 'doing';
const BEING = 'being';
const DREAMING = 'dreaming';

const linkerize = (l) => `/${l}`;

const getTopLevelLinksObj = () => {
  const linksObj = {
    [REACHING]: {
      id: REACHING,
      text: REACHING,
      link: linkerize(REACHING),
      img: reachingImg,
      imgTriangle: reachingTriangleImg,
    },
    [DOING]: {
      id: DOING,
      text: DOING,
      link: linkerize(DOING) + '/negev/location',
      img: doingImg,
      imgTriangle: doingTriangleImg,
    },
    [BEING]: {
      id: BEING,
      text: BEING,
      link: linkerize(BEING) + '/culture',
      img: beingImg,
      imgTriangle: beingTriangleImg,
    },
    [DREAMING]: {
      id: DREAMING,
      text: DREAMING,
      link: linkerize(DREAMING) + '/dream-system',
      img: dreamingImg,
      imgTriangle: dreamingTriangleImg,
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

const linksService = {
  getTopLevelLinksObj,
  getTopLevelLinksList,
};

export default linksService;
