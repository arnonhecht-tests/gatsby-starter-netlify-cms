

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

  const linksMap = [
    {
      src: oasis,
      top: winHeight / 2 - 189,
      left: startPoint,
      height: 100,
      width: 100,
      name: "main-event",
      text: "Reaching",
      linkTarget: 'reaching',
    },
    {
      src: camels,
      top: winHeight / 2 - 147,
      left: startPoint + gutter * 2 - 50,
      height: 100,
      width: 100,
      name: "doing",
      text: "Doing",
      linkTarget: 'doing/negev',
    },
    {
      src: pyramids,
      top: winHeight / 2 - 148,
      left: startPoint + gutter * 3  + middleGap * 3 ,
      height: '150px',
      width: 150,
      name: "culture",
      text: "Being",
      linkTarget: 'being/culture',
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
  for (let i=0; i<linksMap.length-1; i++) {
    commulativeWidth += linksMap[i].width;
    linksMap[i+1].left += commulativeWidth;
  }

  return linksMap;
};

const navigationService = {
  getNavigationMap,
};

export default navigationService;
