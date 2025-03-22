import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import EventCalendar from './EventCalender';
import Announcement from './Announcement';
import Performance from './Performance';  
import axios from 'axios';
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../../styles/DashboardStyles';

// Define Dropdown and Option styles
const DropdownContainer = styled.div`
  margin-top: 10px;
  text-align: center; /* Center align dropdown */
`;

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true); // Set to true to open sidebar by default
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);
  const [metrics, setMetrics] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
  });
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchMetrics();
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchMetrics = async () => {
    setLoadingMetrics(true);
    try {
      const response = await axios.get('https://college-department-server.onrender.com/api/v1/dashboard/metrics');
      setMetrics(response.data);
    } catch (error) {
      setErrorMessage('Error fetching metrics');
    } finally {
      setLoadingMetrics(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://college-department-server.onrender.com/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('https://college-department-server.onrender.com/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get('https://college-department-server.onrender.com/api/v1/performance/getall');
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error('Error fetching student performance:', error);
    }
  };

  return (
    <AdminDashboardContainer>
      <Sidebar isOpen={isOpen} />
      <Content isOpen={isOpen}>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              {loadingMetrics ? (
                <p>Loading metrics...</p>
              ) : errorMessage ? (
                <p>{errorMessage}</p>
              ) : (
                <>
                  <Card>
                    <CardTitle>Total Students</CardTitle>
                    <CardContent>{metrics.totalStudents}</CardContent>
                  </Card>
                  <Card>
                    <CardTitle>Total Teachers</CardTitle>
                    <CardContent>{metrics.totalTeachers}</CardContent>
                  </Card>
                  <Card>
                    <CardTitle>Total Classes</CardTitle>
                    <CardContent>{metrics.totalClasses}</CardContent> {/* Displaying total classes as 4 */}
                  </Card>
                </>
              )}
            </CardContainer>
          </Section>

          <Section>
            <EventCalendar events={events} />
          </Section>
        </TopContent>

        <BottomContent>
          <Announcement announcements={announcements} />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
