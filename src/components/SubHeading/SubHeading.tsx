import React from 'react';
import { images } from '../../constants';
import SubHeadingProps from '../../types/SubHeading';

const SubHeading: React.FC<SubHeadingProps> = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="Spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
