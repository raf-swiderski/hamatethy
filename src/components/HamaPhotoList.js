import * as React from 'react';
import { useState, useCallback } from 'react';
import importImages from '../images/index.js'
import ImageViewer from 'react-simple-image-viewer';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function HamaPhotoList() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = importImages;

  const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
  };
  
  return (
    <Box sx={{ width: 1, height: 1, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {images.map((item, index) => (
          <ImageListItem key={item}>
            <img
              src={item}
              onClick={ () => openImageViewer(index) }
              srcSet={item}
              alt={""}
              loading="lazy"
            />
          </ImageListItem>
        ))}

        {isViewerOpen && (
          <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          />
        )}
      </ImageList>
    </Box>
  );
}

