import React, { Component } from "react";
import apiCaller from './../utils/apiCaller';
export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    apiCaller('Careers', 'GET', null).then(reponse => {
      this.setState({ items: reponse.data })
    })
  }
  render() {
    var items = this.state.items;
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-user-check icon"></i>Career Objective
              </strong>
              <hr />
              <div className="content">
                {items.map(item => (
                  <p key={item.id}> - {item.content}</p>
                ))}
              </div>
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-user-graduate icon"></i>The skill itself
              </strong>
              <hr />
              <div className="">
                <p> - Communication skills.</p>
                <br></br>
                <p>
                  - Easily adaptable to new environments.
                  </p>
                  <br></br>
                  <p>
                  - Analytical skills.
                  </p>
              </div>
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-language icon"></i>INTERESTS
              </strong>
              <hr />
              <div className="row">
                <div className="col s8 m10 l10">
                  <p> - I love reading, traveling with friends and family</p>
                </div>
                <div className="col s4 m2 l2">
                </div>
              </div>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
