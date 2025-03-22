import React from 'react';
import IonIcon from '@reacticons/ionicons';
import image1 from '../assets/events.jpg'; // Adjust the path based on your directory structure
import image2 from '../assets/event2.jpg';
import image3 from '../assets/events3.jpg';

const MScCSCourseOutcomes = () => {
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
        <h1>M.Sc. Computer Science Course Outcomes</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" aria-hidden="true" /> Specialization in Data Science and Full-Stack Development (MERN)
        </h2>
        <p style={styles.paragraph}><strong>Eligibility:</strong> Pass in B.Sc Computer Science / BCA/ B.Sc. Information Technology/B.Sc Computer Technology/B.Sc Software Systems</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" aria-hidden="true" /> About the Program
        </h2>
        <p style={styles.paragraph}>
          The M.Sc. Computer Science program at the RVS College of Arts and Science, Sulur, has the vision of preparing the students with the skills of data science and full-stack development which is in line with the institution's vision of "Education for Digital Era." Data Science and Full-Stack Development have become an integral part of our everyday life. The demand for professionals with the skills to help make this happen is skyrocketing. Our M.Sc CS Program empowers the students' knowledge with various technological clusters, including programming, visualization, analytic, and Full-Stack Development courses.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="book-outline" aria-hidden="true" /> Specialization Courses
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Data Science Specialization Courses</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Data Visualization using Excel</li>
            <li style={styles.listItem}>Statistics for Data Science</li>
            <li style={styles.listItem}>R for Data Science</li>
            <li style={styles.listItem}>Data Analysis using Python</li>
            <li style={styles.listItem}>Business Intelligence using Pentaho</li>
            <li style={styles.listItem}>Data Visualization using Tableau</li>
            <li style={styles.listItem}>Machine Learning</li>
            <li style={styles.listItem}>Big Data Engineering</li>
          </ul>
        </div>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Full-Stack Specialization Courses</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>HTML and CSS</li>
            <li style={styles.listItem}>Web Development using JavaScript</li>
            <li style={styles.listItem}>Front End Development using React</li>
            <li style={styles.listItem}>Backend Development using Node JS and MongoDB</li>
            <li style={styles.listItem}>Full-Stack Development Tools</li>
          </ul>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" aria-hidden="true" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Data Science Specialization</h3>
          <p style={styles.paragraph}>We offer Data Analysis in R, Data Analysis using Python, Data Visualization, Machine learning, and Big Data. Our programme will prepare you for the job market as a data analyst. You can also specialize in any one of the above-mentioned areas with additional skills.</p>
          <h4>Semester I:</h4>
          <p style={styles.paragraph}>Data Analysis in R - You will learn the basic skills in Excel, Statistical Concepts, and R. You will also learn data cleaning, data preparation, and transformation in R.</p>
          <h4>Semester II:</h4>
          <p style={styles.paragraph}>Data Analysis using Python - You will learn the various data analysis techniques using the often-used data science language, Python. NumPy arrays, pandas data frames, applying statistical models and visualizations using matplotlib and seaborn libraries are some of the areas you will learn.</p>
          <h4>Semester III:</h4>
          <p style={styles.paragraph}>Data Visualization using Tableau and Machine Learning - Tableau will help you create effective visualizations. Work with well-known Machine Learning algorithms to build suitable machine learning models.</p>
          <h4>Semester IV:</h4>
          <p style={styles.paragraph}>Big Data, Cloud, and DevOps - It develops an understanding of various applications of Big Data Systems used in the industry. You will learn the essentials for working in Cloud, automated testing, and deployment for a solid foundation in DevOps.</p>
        </div>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Full-Stack Development – MERN</h3>
          <h4>Semester I:</h4>
          <p style={styles.paragraph}>Web Development - You will learn the basic skills in Web Development through JavaScript, HTML, and CSS. You will also be able to create your portfolio on GitHub.</p>
          <h4>Semester II:</h4>
          <p style={styles.paragraph}>Front-End Development - Learn more about front-end development through the popular framework React. Learn to concise code with JavaScript ES6. You will also work with web components in React. In addition, you will learn to build React applications and how to test and deploy them.</p>
          <h4>Semester III:</h4>
          <p style={styles.paragraph}>Back-End Development - You will work with MongoDB, ExpressJS, and NodeJS to become confident in the MERN stack. You will learn the essentials for working in Cloud, automated testing, and deployment for a solid foundation in DevOps.</p>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" aria-hidden="true" /> MSc Department Photos
        </h2>
        <div style={styles.photoSection}>
          <img src={image1} alt="MSc Department 1" style={styles.photo} />
          <img src={ image2} alt="MSc Department 2" style={styles.photo} />
          <img src={ image3} alt="MSc Department 3" style={styles.photo} />
          {/* <img src="photo4.jpg" alt="MSc Department 4" style={styles.photo} /> */}
        </div>
      </section>
    </div>
  );
};

export default MScCSCourseOutcomes;
