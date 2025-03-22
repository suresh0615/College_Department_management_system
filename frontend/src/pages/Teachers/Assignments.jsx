import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
  DeleteButton,
  ClassSelect // Import or define a styled component for the class dropdown
} from '../../styles/AssignmentsStyles';

const Assignments = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', class: '', deadline: '' });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('https://college-department-server.onrender.com/api/v1/assignments/getall');
      console.log('Fetched Assignments:', response.data);
      setAssignments(response.data.assignments || []);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (newAssignment.title.trim() !== '' && newAssignment.description.trim() !== '' && newAssignment.class.trim() !== '' && newAssignment.deadline.trim() !== '') {
      try {
        const response = await axios.post('https://college-department-server.onrender.com/api/v1/assignments', newAssignment);
        toast.success('Assignment added successfully');
        setAssignments([...assignments, response.data.assignment]);
        setNewAssignment({ title: '', description: '', class: '', deadline: '' });
      } catch (error) {
        console.error('Error adding assignment:', error);
        toast.error('Error adding assignment');
      }
    } else {
      toast.error('Please fill out all fields');
    }
  };

  const handleDeleteAssignment = async (id) => {
    try {
      await axios.delete(`https://college-department-server.onrender.com/api/v1/assignments/${id}`);
      toast.success('Assignment deleted successfully');
      setAssignments(assignments.filter(assignment => assignment.id !== id && assignment._id !== id));
    } catch (error) {
      console.error('Error deleting assignment:', error);
      toast.error('Error deleting assignment');
    }
  };

  return (
    <AssignmentsContainer>
      <ToastContainer />
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            />
            <ClassSelect
              value={newAssignment.class}
              onChange={(e) => setNewAssignment({ ...newAssignment, class: e.target.value })}
            >
              <option value="">Select class</option>
              <option value="MSc">MSc</option>
              <option value="MCA">MCA</option>
              <option value="BSc">BSc</option>
              <option value="BCA">BCA</option>
            </ClassSelect>
            <AddAssignmentInput
              type="date"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {assignments.map((assignment) => (
              <AssignmentItem key={assignment.id || assignment._id}>
                <div>
                  <strong>{assignment?.title || 'Untitled'}:</strong>
                  <p>{assignment?.description || 'No description'}</p>
                  <p><em>Class: {assignment?.class || 'N/A'}</em></p>
                  <p>Deadline: {assignment?.deadline || 'No deadline'}</p>
                </div>
                <DeleteButton onClick={() => handleDeleteAssignment(assignment.id || assignment._id)}>Delete</DeleteButton>
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignments;
