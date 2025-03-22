import styled from 'styled-components';

// Container for the Admin Dashboard
export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

// Main Content Area
export const Content = styled.div`
  flex: 1;
  padding: 30px;
  margin-left: 250px; /* Set left margin for sidebar spacing */
  transition: margin-left 0.3s ease;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 60px); /* Height minus padding */
  overflow-y: auto;
  color: #333; /* Dark gray text color */
`;

// Top Section of Content
export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  align-items: flex-start;
`;

// Bottom Section of Content
export const BottomContent = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: stretch;
`;

// Section Container
export const Section = styled.section`
  margin-bottom: 25px;
  padding: 20px;
  border: 1px solid #80deea; /* Light teal border */
  border-radius: 12px;
  width: 100%;
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid #4db6ac;
  }
`;

// Section Title Styling
export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #00796b; /* Dark teal color */
  border-bottom: 3px solid #80cbc4;
  padding-bottom: 12px;
`;

// Card Container
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

// Individual Card Styling
export const Card = styled.div`
  color: #00796b;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  max-width: 300px; /* Card width */
  border-left: 8px solid #4db6ac;

  &:hover {
    transform: translateY(-8px);
    color: #004d40;
  }
`;

// Card Title Styling
export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #004d40;
`;

// Card Content Styling
export const CardContent = styled.p`
  font-size: 16px;
  color: #333;
`;

// Container for Student Dashboard
export const StudentDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100vh;
  overflow-y: auto;
  color: #333;
`;

// Container for Teacher Dashboard
export const TeacherDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100vh;
  overflow-y: auto;
  justify-content: flex-start;
  color: #333;
`;

// Event Container Styling
export const Events = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  align-items: flex-start;
`;

// Individual Event Box Styling
export const Event = styled.div`
  padding: 20px;
  border: 1px solid #b2ebf2; /* Light teal border */
  border-radius: 12px;
  width: 100%;
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid #4db6ac;
  }

  p {
    color: #333;
    text-align: left;
  }
`;

// Logo Styling
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

// Header Styling
export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
`;

// Header Title Styling
export const HeaderTitle = styled.h1`
  font-size: 28px;
  margin-left: 10px;
`;

// Announcement List Styling
export const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

// Individual Announcement Item Styling
export const AnnouncementItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #80cbc4; /* Light border color */
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid #4db6ac;
  }
`;

// Announcement Content Styling
export const AnnouncementContent = styled.p`
  font-size: 16px;
  margin: 0;
  color: #333;
  line-height: 1.6;
`;
