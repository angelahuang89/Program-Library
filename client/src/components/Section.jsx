import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const cardStyle = {
  margin: '10px',
};

const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

const Section = (props) => {
  const { section, getSectionDetails } = props;
  return (
    <Card style={cardStyle}>
      <CardContent>
        <div
          role="presentation"
          onClick={() => getSectionDetails(section.id)}
          onKeyPress={e => (e.key === 'Enter' ? getSectionDetails(section.id) : null)}
        >
          <Link component={RouterLink} style={sectionStyle} to={`/sections/${section.id}`}>
            {section.name}
            <img className="overview" alt={section.name} src={section.overview_image} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

Section.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    overview_image: PropTypes.string.isRequired,
    order_index: PropTypes.number.isRequired,
  }).isRequired,
  getSectionDetails: PropTypes.func.isRequired,
};

export default Section;
