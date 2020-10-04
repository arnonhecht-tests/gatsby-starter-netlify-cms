import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import { BeingPageTemplate } from '../templates/being-page'
import { ReachingPageTemplate } from '../templates/reaching-page'
import { DoingPageTemplate } from '../templates/doing-page'
import { DoingPageEventTemplate } from '../templates/doing-page-event'
import { DreamingPageTemplate } from '../templates/dreaming-page'

import InnerPagePreviewFactory from './preview-templates/InnerPagePreviewFactory'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import MainEventPreview from './preview-templates/MainEventPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)

/* Inner Pages */
// CMS.registerPreviewTemplate('reaching', ReachingPagePreview)
CMS.registerPreviewTemplate('volunteers', InnerPagePreviewFactory(ReachingPageTemplate))
CMS.registerPreviewTemplate('change-makers', InnerPagePreviewFactory(ReachingPageTemplate))
CMS.registerPreviewTemplate('empower', InnerPagePreviewFactory(ReachingPageTemplate))
CMS.registerPreviewTemplate('contact', InnerPagePreviewFactory(ReachingPageTemplate))
CMS.registerPreviewTemplate('faq', InnerPagePreviewFactory(ReachingPageTemplate))
CMS.registerPreviewTemplate('doing-negev-location', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-negev-guide', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-negev-participate', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-negev-tickets', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-sinai-location', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-sinai-guide', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-sinai-participate', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-sinai-tickets', InnerPagePreviewFactory(DoingPageEventTemplate))
CMS.registerPreviewTemplate('doing-gatherings', InnerPagePreviewFactory(DoingPageTemplate))
CMS.registerPreviewTemplate('doing-retreats', InnerPagePreviewFactory(DoingPageTemplate))
// CMS.registerPreviewTemplate('being', BeingPagePreview)
CMS.registerPreviewTemplate('whtis-whtif', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-culture', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-about-us', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-retreats', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('being-participate', InnerPagePreviewFactory(BeingPageTemplate))
CMS.registerPreviewTemplate('dreaming-dream-system', InnerPagePreviewFactory(DreamingPageTemplate))
CMS.registerPreviewTemplate('dreaming-global-blog', InnerPagePreviewFactory(DreamingPageTemplate))


CMS.registerPreviewTemplate('main-event', MainEventPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
