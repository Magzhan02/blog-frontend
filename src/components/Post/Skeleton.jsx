import React from 'react';
import ContentLoader from 'react-content-loader';

export const PostsSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={480}
      height={450}
      viewBox="0 0 480 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="115" y="106" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="-1" rx="16" ry="16" width="480" height="260" />
      <rect x="0" y="282" rx="5" ry="5" width="200" height="30" />
      <rect x="-1" y="327" rx="5" ry="5" width="480" height="80" />
      <rect x="287" y="367" rx="0" ry="0" width="1" height="0" />
      <rect x="3" y="423" rx="5" ry="5" width="85" height="20" />
      <rect x="164" y="423" rx="5" ry="5" width="159" height="20" />
      <rect x="426" y="423" rx="5" ry="5" width="50" height="20" />
    </ContentLoader>
  );
};
