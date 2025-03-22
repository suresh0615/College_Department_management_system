import styled from 'styled-components';

// Main container with hover effects for background layers
export const RegisterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &:hover, &:active {
    .top, .bottom {
      &:before, &:after {
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay: 0s;
      }
    }
    .form-container {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`;

// Background layers for top and bottom effects
export const TopLayer = styled.div`
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index: 1;
    opacity: 0.65;
    transition-delay: 0.2s;
  }
  &:before {
    transform: rotate(45deg);
    background: #e46569; // Color for top layer
  }
  &:after {
    transform: rotate(135deg);
    background: #ecaf81; // Secondary color for top layer
  }
`;

export const BottomLayer = styled(TopLayer)`
  &:before {
    transform: rotate(-45deg);
    background: #60b8d4; // Color for bottom layer
  }
  &:after {
    transform: rotate(-135deg);
    background: #3745b5; // Secondary color for bottom layer
  }
`;

// Form container for centering the form
export const FormContainer = styled.form`
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 10;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);

  h2 {
    color: #333;
    margin-bottom: 20px;
  }
`;

// Input field styling for the form
export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 1em;
`;

// Select dropdown for user type
export const UserTypeSelector = styled.select`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 1em;
`;

// Submit button styling
export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: #e46569;
  border: none;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ecaf81;
  }
`;
export const ClassSelector = styled.select`
  /* Style for class dropdown */
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;
