// ExamStyles.js
import styled from 'styled-components';

export const ExamContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ExamHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ExamForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ExamResultsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const ExamSubject = styled.h3`
  margin-bottom: 10px;
`;

export const ExamResult = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

export const ExamChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
export const DeleteButton = styled.button`
  background-color: #ff4d4d; /* Red background */
  color: white; /* White text */
  border: none; /* No border */
  padding: 8px 12px; /* Padding */
  margin-left: 10px; /* Space between class name and button */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: #ff1a1a; /* Darker red on hover */
  }

  &:focus {
    outline: none; /* Remove outline on focus */
  }
`;

/* ErrorMessage styles */
export const ErrorMessage = styled.div`
  color: #d9534f; /* Red color for errors */
  background-color: #f2dede; /* Light red background */
  border: 1px solid #ebccd1; /* Border color matching background */
  padding: 10px; /* Spacing inside the error box */
  border-radius: 5px; /* Rounded corners */
  margin: 15px 0; /* Space above and below */
  font-weight: bold; /* Bold text for emphasis */
  text-align: center; /* Center the text */
`;

export const FormSelect = styled.select`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
`;
export const ExamList = styled.ul`
  list-style-type: none; /* Remove bullet points */
  padding: 0;
`;

export const ExamItem = styled.li`
  display: flex;
  justify-content: space-between; /* Align items properly */
  padding: 10px;
  border: 1px solid #ccc; /* Add border for separation */
  margin: 5px 0; /* Space between items */
  border-radius: 5px; /* Rounded corners */
  background-color: #f9f9f9; /* Light background color */
`;

export const ExamInfo = styled.div`
  flex-grow: 1; /* Allow this div to take available space */
  margin-right: 20px; /* Space between info and delete button */
  color: #333; /* Text color */
`;