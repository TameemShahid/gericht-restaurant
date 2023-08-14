import React from 'react';
import AwardCardProps from '../../types/AwardCard';

const AwardCard: React.FC<AwardCardProps> = ({
  award: { imgUrl, title, subtitle },
}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" data-testid="awards-img" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

export default AwardCard;
