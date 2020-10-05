

import oasis from "../../static/img/oasis.png" 
import children from "../../static/img/children.png" 
import pyramids from "../../static/img/pyramids.png" 
import camels from "../../static/img/camels.png" 


const getNavigationMap = (windowGlobal) => {
  // const windowGlobal = typeof window !== 'undefined' && window;
  const winWidth = windowGlobal.innerWidth;
  const winHeight = windowGlobal.innerHeight;
  const numLinks = 5;
  const startPoint = 65;
  const middleGap = 100;
  const gutter = (winWidth / numLinks) - 165;
  let currentLocation = windowGlobal.location.pathname;
  currentLocation = currentLocation.split('/').filter(v => !!v)[0];

  const linksMap = [
    {
      src: oasis,
      top: winHeight / 2 - 189,
      left: startPoint,
      height: 100,
      width: 100,
      name: "reaching",
      text: "Reaching",
      linkTarget: 'reaching/volunteers',
    },
    {
      src: camels,
      top: winHeight / 2 - 147,
      left: startPoint + gutter * 2 - 50,
      height: 100,
      width: 100,
      name: "doing",
      text: "Doing",
      linkTarget: 'doing/negev/location',
    },
    {
      src: pyramids,
      top: winHeight / 2 - 148,
      left: startPoint + gutter * 3  + middleGap * 3 ,
      height: '150px',
      width: 150,
      name: "being",
      text: "Being",
      linkTarget: 'being/whtis-whtif',
    },
    {
      src: children,
      top: winHeight / 2 - 193,
      left: startPoint + gutter * 4 + middleGap * 3,
      height: 100,
      width: 100,
      name: "dreaming",
      text: "Dreaming",
      linkTarget: 'dreaming/dream-system',
    },
  ];

  let commulativeWidth = 0

  for (let i=0; i < linksMap.length; i++) {
    linksMap[i].isSelected = linksMap[i].linkTarget.includes(currentLocation);
    commulativeWidth += linksMap[i].width;
    if (i < linksMap.length-1) {
      linksMap[i+1].left += commulativeWidth;
    }
  }

  return linksMap;
};

const navigationService = {
  getNavigationMap,
};

export default navigationService;
