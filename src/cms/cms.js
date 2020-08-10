import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import { BeingPageTemplate } from '../templates/being-page'
import { ReachingPageTemplate } from '../templates/reaching-page'
import { DoingPageTemplate } from '../templates/doing-page'
import { DreamingPageTemplate } from '../templates/dreaming-page'

import InnerPagePreviewFactory from './preview-templates/InnerPagePreviewFactory'

import AboutPagePreview from './preview-templates/AboutPagePreview'
// import BeingPagePreview from './preview-templates/BeingPagePreview'
// import ReachingPagePreview from './preview-templates/ReachingPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import MainEventPreview from './preview-templates/MainEventPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)

/* Inner Pages */
// CMS.registerPreviewTemplate('being', BeingPagePreview)
CMS.registerPreviewTemplate('doing-negev', InnerPagePreviewFactory(DoingPageTemplate))
CMS.registerPreviewTemplate('doing-sinai', InnerPagePreviewFactory(DoingPageTemplate))
CMS.registerPreviewTemplate('doing-gatherings', InnerPagePreviewFactory(DoingPageTemplate))
CMS.registerPreviewTemplate('doing-retreats', InnerPagePreviewFactory(DoingPageTemplate))
// CMS.registerPreviewTemplate('being', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-culture', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-about-us', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-retreats', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-participate', InnerPagePreviewFactory(BeingPageTemplate))
// CMS.registerPreviewTemplate('reaching', ReachingPagePreview)
CMS.registerPreviewTemplate('dreaming-dream-system', InnerPagePreviewFactory(DreamingPageTemplate))
CMS.registerPreviewTemplate('dreaming-global-blog', InnerPagePreviewFactory(DreamingPageTemplate))


CMS.registerPreviewTemplate('main-event', MainEventPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
