import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Program from './Program';
import SectionDetail from './SectionDetail';

const appStyle = {
  fontFamily: 'Arial',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [],
      section: null,
    };

    this.getPrograms = this.getPrograms.bind(this);
    this.getSectionDetails = this.getSectionDetails.bind(this);
  }

  componentDidMount() {
    this.getPrograms();
  }

  getPrograms() {
    axios.get('/programs')
      .then((res) => {
        this.setState({
          programs: res.data,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  getSectionDetails(sectionId) {
    axios.get(`/sections/${sectionId}`)
      .then((res) => {
        this.setState({
          section: res.data,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    const { programs, section } = this.state;
    return (
      <Router>
        <div style={appStyle}>
          <Route
            exact
            path="/"
            render={() => (
              <div style={appStyle}>
                <h1>Program Overview</h1>
                {
                  programs.map(program => (
                    <Program
                      key={program.id}
                      program={program}
                      getSectionDetails={this.getSectionDetails}
                    />
                  ))
                }
              </div>
            )}
          />
          <Route
            exact
            path="/sections/:id"
            render={() => (
              <SectionDetail
                section={section}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default hot(App);
