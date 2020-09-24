
const getPageDataFetcher = (navImage, mobileNavImage) => ({
 getNavImage: (isSmallScreen) => {
  return isSmallScreen ? mobileNavImage : navImage;
 },
});


const pageDataMediatorService = {
  getPageDataFetcher,
};

export default pageDataMediatorService;
