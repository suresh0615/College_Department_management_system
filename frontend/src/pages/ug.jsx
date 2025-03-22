import React from 'react';
import IonIcon from '@reacticons/ionicons';

const UGProgram = () => {
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
        <h1>UG Programs: B.Sc. Computer Science & BCA</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" aria-hidden="true" /> Eligibility Criteria
        </h2>
        <p style={styles.paragraph}>
          Passed 10+2 with Mathematics as a compulsory subject. The student needs to obtain at least 50% marks (45% marks in the case of candidates belonging to the reserved category) in the Qualifying Examination.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" aria-hidden="true" /> About the Programme
        </h2>
        <p style={styles.paragraph}>
          The UG programs in B.Sc. Computer Science and BCA at RVS CAS are designed to provide a strong foundation in computer science and application development. These programs focus on equipping students with the necessary skills to excel in the IT industry.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="book-outline" aria-hidden="true" /> About the Specialization
        </h2>
        <p style={styles.paragraph}>
          Specialization: Full Stack Development, Data Science, and Mobile App Development
          <br />
          Duration: 3 Years (Full time) – with six semesters
          <br />
          AICTE approved & affiliated with Bharathiar University
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" aria-hidden="true" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Semester I:</h3>
          <p style={styles.paragraph}>Introduction to Programming, Mathematics for Computer Science, Digital Electronics.</p>
          <h3 style={styles.subSectionTitle}>Semester II:</h3>
          <p style={styles.paragraph}>Data Structures, Object-Oriented Programming, Database Management Systems.</p>
          <h3 style={styles.subSectionTitle}>Semester III:</h3>
          <p style={styles.paragraph}>Web Development, Operating Systems, Software Engineering.</p>
          <h3 style={styles.subSectionTitle}>Semester IV:</h3>
          <p style={styles.paragraph}>Network Security, Mobile App Development, Cloud Computing.</p>
          <h3 style={styles.subSectionTitle}>Semester V:</h3>
          <p style={styles.paragraph}>Machine Learning, Big Data Analytics, Internet of Things.</p>
          <h3 style={styles.subSectionTitle}>Semester VI:</h3>
          <p style={styles.paragraph}>Project Work, Internship, Advanced Topics in Computer Science.</p>
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
          <IonIcon name="thumbs-up-outline" aria-hidden="true" /> Advantages of UG Programs at RVSCAS
        </h2>
        <p style={styles.paragraph}>Details about the advantages of the UG programs at RVSCAS.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" aria-hidden="true" /> UG Department Photos
        </h2>
        <div style={styles.photoSection}>
          <img src="photo1.jpg" alt="UG Department 1" style={styles.photo} />
          <img src="photo2.jpg" alt="UG Department 2" style={styles.photo} />
          <img src="photo3.jpg" alt="UG Department 3" style={styles.photo} />
          <img src="photo4.jpg" alt="UG Department 4" style={styles.photo} />
        </div>
      </section>
    </div>
  );
};

export default UGProgram;
