import React from 'react';
import styled from 'styled-components';
import teach from "../assets/teacher1.jpeg";

const TeacherCard = ({ name, qualifications, specialization, image }) => (
  <Card>
    <Image src={image} alt={`${name}'s image`} />
    <Details>
      <Name>{name}</Name>
      <Text>{qualifications}</Text>
      <Text>{specialization}</Text>
    </Details>
  </Card>
);

const App = () => {
  const teachers = [
    {
      name: 'Ravidranath',
      qualifications: 'Ph.D. in Computer Science',
      specialization: 'Artificial Intelligence',
      image: teach
    },
    {
      name: 'vignesh',
      qualifications: 'M.Sc. in Mathematics',
      specialization: 'Data Science',
      image:teach
    },
    {
      name: 'Sanmugarajathi',
      qualifications: 'Ph.D. in Computer Science',
      specialization: 'Artificial Intelligence',
      image: teach
    },
    {
      name: 'chitra',
      qualifications: 'M.Sc. ',
      specialization: 'compute Science',
      image:teach
    },
    // Add more teachers as needed...
  ];

  return (
    <Container>
      {teachers.map((teacher, index) => (
        <TeacherCard
          key={index}
          name={teacher.name}
          qualifications={teacher.qualifications}
          specialization={teacher.specialization}
          image={teacher.image}
        />
      ))}
    </Container>
  );
};

export default App;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  margin: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.1); /* Scale image on hover */
  }
`;

const Details = styled.div`
  padding: 20px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Text = styled.p`
  margin: 10px 0;
  color: #777;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
