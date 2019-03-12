/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Section from './Section';

const programHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  margin: '0px 100px',
  paddingTop: '20px',
};

const sectionsStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const modalStyle = {
  fontFamily: 'Arial',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignContent: 'space-around',
  width: '50%',
  height: '30%',
  outline: 'none',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(50%, 50%)',
  padding: '20px',
};

class Program extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      modalIsOpen: false,
    };

    this.getSections = this.getSections.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const { program } = this.props;
    this.getSections(program.id);
  }

  getSections(programId) {
    axios.get(`/programs/${programId}`)
      .then((res) => {
        this.setState({
          sections: res.data.sections,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { program, getSectionDetails } = this.props;
    const { sections, modalIsOpen } = this.state;
    return (
      <div>
        <div style={programHeaderStyle}>
          <h2>{program.name}</h2>
          <Link onClick={this.openModal} onKeyPress={e => (e.key === 'Enter' ? this.openModal() : null)}>Learn More</Link>
        </div>
        <div style={sectionsStyle}>
          {
            sections.map(section => (
              <Section
                key={section.id}
                section={section}
                getSectionDetails={getSectionDetails}
              />
            ))
          }
        </div>
        <Modal
          open={modalIsOpen}
          onClose={this.closeModal}
        >
          <div style={modalStyle}>
            <h3>{program.name}</h3>
            <div>{program.description}</div>
            <div>
              <Button onClick={this.closeModal}>Close</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

Program.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  getSectionDetails: PropTypes.func.isRequired,
};

export default Program;
