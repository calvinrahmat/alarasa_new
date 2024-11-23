import createImageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

interface SanityImage {
  _type: 'image';
  alt?: string;
  asset: {
    _ref?: string;
    _type?: string;
  };
}

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
});

export const urlForImage = (source: SanityImage): ImageUrlBuilder => {
  if (!source?.asset?._ref) {
    throw new Error('Missing asset reference');
  }

  return imageBuilder.image(source);
};