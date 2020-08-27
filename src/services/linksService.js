
const REACHING = 'reaching';
const DOING = 'doing';
const BEING = 'being';
const DREAMING = 'dreaming';

const linkerize = (l) => `/${l}`;

const getTopLevelLinksObj = () => ({
  [REACHING]: {
    id: REACHING,
    text: REACHING,
    link: linkerize(REACHING),
  },
  [DOING]: {
    id: DOING,
    text: DOING,
    link: linkerize(DOING) + '/negev/location',
  },
  [BEING]: {
    id: BEING,
    text: BEING,
    link: linkerize(BEING) + '/culture',
  },
  [DREAMING]: {
    id: DREAMING,
    text: DREAMING,
    link: linkerize(DREAMING) + '/dream-system',
  },
});

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
