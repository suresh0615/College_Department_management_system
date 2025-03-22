import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import image1 from '../assets/events.jpg'; // Adjust the path based on your directory structure
import image2 from '../assets/event2.jpg';
import image3 from '../assets/events3.jpg';

// Global styles
const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  }
`;

// Styled container
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  background: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

// Styled figure component to hold image and caption
const Figure = styled.div`
  margin: 15px;
  text-align: center;
`;

// Styled image component
const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

// Styled caption component
const Caption = styled.figcaption`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;

const ImageSlider = () => {
  // Array of local image imports and descriptions
  const images = [
    { src: image1, text: 'Local Image 1' },
    { src: image2, text: 'Local Image 2' },
    { src: image3, text: 'Local Image 3' },
    { src: image3, text: 'Local Image 3' },
  ];

  return (
    <>
      {/* <GlobalStyle /> */}
      <Container>
        {images.map((item, index) => (
          <Figure key={index}>
            <Image src={item.src} alt={`Slide ${index + 1}`} />
            <Caption>{item.text}</Caption>
          </Figure>
        ))}
      </Container>
      
      <Container>
      <h2>College Events</h2>
        {images.map((item, index) => (
          <Figure key={index}>
            <Image src={item.src} alt={`Slide ${index + 1}`} />
            <Caption>{item.text}</Caption>
          </Figure>
        ))}
      </Container>
    </>
  );
};

export default ImageSlider;
