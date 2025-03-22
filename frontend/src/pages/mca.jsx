import React from 'react';
import IonIcon from '@reacticons/ionicons';
import image1 from '../assets/events.jpg'; // Adjust the path based on your directory structure
import image2 from '../assets/event2.jpg';
import image3 from '../assets/events3.jpg';

const MCAProgram = () => {
  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f9',
      color: '#333',
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 1s ease-in-out',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '28px',
      marginBottom: '15px',
      color: '#0056b3',
      borderBottom: '2px solid #0056b3',
      paddingBottom: '5px',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
    paragraph: {
      marginBottom: '15px',
      lineHeight: '1.6',
    },
    subSectionTitle: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    subSection: {
      marginBottom: '20px',
    },
    photoSection: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '40px',
    },
    photo: {
      width: '300px',
      height: '200px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      objectFit: 'cover',
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>MCA Program</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" aria-hidden="true" /> Eligibility Criteria
        </h2>
        <p style={styles.paragraph}>
          Passed BCA/Bachelor's Degree in Computer Science Engineering or equivalent degree, or B.Sc. /B.Com./B.A. With Mathematics at 10+2 level or Graduation Level. The student needs to obtain at least 50% marks (45% marks in the case of candidates belonging to the reserved category) in the Qualifying Examination.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" aria-hidden="true" /> About the Programme
        </h2>
        <p style={styles.paragraph}>
          The two-year RVS CAS MCA Program is a full-time course that leads to 'Full Stack App Development' with a strong foundation of Web Development skills and Project Development skills to stay ahead.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="book-outline" aria-hidden="true" /> About the Specialization
        </h2>
        <p style={styles.paragraph}>
          Specialization: Dual Specialization (Full Stack Development-MERN & Full Stack Development-React Native)
          <br />
          Duration: 2 Years (Only Full time) – with four semesters
          <br />
          AICTE approved & affiliated with Bharathiar University TANCET Counselling Code: 395
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" aria-hidden="true" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Semester I:</h3>
          <p style={styles.paragraph}>Courses on Basic Web Development Skills in JavaScript, HTML, and CSS.</p>
          <h3 style={styles.subSectionTitle}>Semester II:</h3>
          <p style={styles.paragraph}>
            Front-end Development and React
            <br />
            Learn more about front-end development using the popular framework, React. Learn to concise code with JavaScript ES6. You will also work with web components in React. You will practice MongoDB, Express JS, and Node JS tools to become confident in the MERN stack. In addition, you will learn to build a secure full-stack web application using the MERN stack and learn to test and deploy them.
          </p>
          <h3 style={styles.subSectionTitle}>Semester III:</h3>
          <p style={styles.paragraph}>
            Full-stack development tools
            <br />
            You will learn the critical cloud concepts of modern web application development, the essentials for working in the cloud, automated testing, and deployment. In addition, you will learn key DevOps concepts for Continuous Integration (CI) and Continuous Delivery (CD).
          </p>
          <h3 style={styles.subSectionTitle}>Semester IV:</h3>
          <p style={styles.paragraph}>
            Mobile App Development:
            <br />
            You will learn to develop Capstone Project to develop Hybrid Mobile Development Stack.
          </p>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="star-outline" aria-hidden="true" /> Programme Highlights
        </h2>
        <p style={styles.paragraph}>Details about the programme highlights.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="briefcase-outline" aria-hidden="true" /> Job Opportunities
        </h2>
        <p style={styles.paragraph}>Details about job opportunities.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="thumbs-up-outline" aria-hidden="true" /> Advantages of MCA at RVSCAS
        </h2>
        <p style={styles.paragraph}>Details about the advantages of the MCA program at RVSCAS.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" aria-hidden="true" /> MCA Department Photos
        </h2>
        <div style={styles.photoSection}>
          <img src={image1} alt="MCA Department 1" style={styles.photo} />
          <img src={image2} alt="MCA Department 2" style={styles.photo} />
          <img src={image3} alt="MCA Department 3" style={styles.photo} />
          {/* <img src="photo4.jpg" alt="MCA Department 4" style={styles.photo} /> */}
        </div>
      </section>
    </div>
  );
};

export default MCAProgram;
