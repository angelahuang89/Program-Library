/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const sectionDetailStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '20px',
  padding: '100px',
  lineHeight: '1.5rem',
  textAlign: 'left',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '25px 50px',
  width: '75%',
};

const SectionDetail = (props) => {
  const { section } = props;
  return (
    <Paper>
      {
        section
        && (
        <div style={sectionDetailStyle}>
          <h3>{section.name}</h3>
          <div style={contentStyle}>
            <div dangerouslySetInnerHTML={{ __html: section.html_content }} />
            <img className="overview" alt={section.name} src={section.overview_image} />
          </div>
          <Button>
            <Link href="/">Back to Program Overview</Link>
          </Button>
        </div>
        )
      }
    </Paper>
  );
};

SectionDetail.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    overview_image: PropTypes.string.isRequired,
    order_index: PropTypes.number.isRequired,
    html_content: PropTypes.string.isRequired,
  }).isRequired,
};

export default SectionDetail;
