import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

// import ServicesPagePreview from './preview-templates/ServicesPagePreview';
// import BlogPostPreview from './preview-templates/BlogPostPreview';
import CaseStudyPreview from './preview-templates/CaseStudyPreview';
// import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
// CMS.registerPreviewTemplate('services', ServicePagePreview);
// CMS.registerPreviewTemplate('products', ProductPagePreview);
// CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('casestudy', CaseStudyPreview);
