
export const REACHING = 'reaching';
export const DOING = 'doing';
export const BEING = 'being';
export const DREAMING = 'dreaming';

const linkerize = (l) => `/${l}`;
const setImg = (linkObj, imgToSet) => {linkObj.img = imgToSet};

const getTopLevelLinksObj = () => {
  const linksObj = {
    [REACHING]: {
      id: REACHING,
      text: REACHING,
      link: linkerize(REACHING) + '/volunteers',
      innerNavList: [
        {text: "Volunteers", linkTarget: 'volunteers'},
        {text: "Change Makers", linkTarget: 'change-makers'},
        {text: "Empower", linkTarget: 'empower'},
        {text: "Contact ", linkTarget: 'contact'},
        {text: "F & Q ", linkTarget: 'faq'},
      ], 
    },
    [DOING]: {
      id: DOING,
      text: DOING,
      link: linkerize(DOING) + '/negev/location',
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
      link: linkerize(BEING) + '/whtis-whtif',
      innerNavList: [
        {text: "Wht is Wht If", linkTarget: 'whtis-whtif'},
        {text: "Wht If culture", linkTarget: 'culture'},
        {text: "History ", linkTarget: 'about-us'},
      ],
    },
    [DREAMING]: {
      id: DREAMING,
      text: DREAMING,
      link: linkerize(DREAMING) + '/dream-system',
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
const getTopLevelLinksListOrder2 = (reachingCard, doingCard, beingCard, dreamingCard) => {
  const lo = getTopLevelLinksObj();
  setImg(lo[REACHING], reachingCard);
  setImg(lo[DOING], doingCard);
  setImg(lo[BEING], beingCard);
  setImg(lo[DREAMING], dreamingCard);
  return [lo[DOING],lo[BEING],lo[DREAMING],lo[REACHING],];
}

const linksService = {
  getTopLevelLinksObj,
  getTopLevelLinksList,
  getTopLevelLinksListOrder2,
};

export default linksService;
