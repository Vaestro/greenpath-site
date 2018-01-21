import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import graphql from 'graphql';
import '../css/master.css';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    return (
      <div>

        <section className="hero is-medium" style={{
          backgroundImage: 'url("https://s3.amazonaws.com/joinswaybucket/blueprint.png")',
          backgroundSize:'cover',
          backgroundPosition:'center'
        }}>

          <Script url="https://identity.netlify.com/v1/netlify-identity-widget.js" onLoad={() => this.handleScriptLoad()}/>

          <div className="hero-body">
            <div className="container has-text-left">
              <div className="columns is-vcentered">
                <div className="column is-half">

                  <p className="title has-text-weight-bold is-italic is-size-1 is-size-3-mobile is-uppercase">
                    What happens when we put safety first?
                  </p>
                  <p className="subtitle is-size-3 is-size-4-mobile">
                    We’ve been making NYC construction safer and more efficient for over 20 years. Contact us to find out how we can help you.
                  </p>
                  <Link to="/pricing" className="button is-medium is-primary is-rounded" style={{
                    padding: '30px 50px',
                    marginTop: '10px'
                  }}>
                    <p>Get in touch</p>
                  </Link>

                </div>
                <div className="column is-one-third">
                  <figure className="image">
                    <img src="http://www.greenpathus.com/46c8fb14de23c08a6e22695030ac053c.png"/>
                  </figure>

                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title is-size-2">Our Services</h1>
            <div className="columns">
              <div className="column">
                <div className="box" style={{
                  height: '100%'
                }}>
                {/*
                  <figure className="image is-96x96 is-inline-block">
                    <img src="https://s3.amazonaws.com/joinswaybucket/clock.jpeg"/>
                  </figure>
                  */}
                  <h1 className="title has-text-primary is-size-4" style={{
                    padding: '25px 0'
                  }}>Site Safety Program</h1>
                  <p className="subtitle has-text-gray is-size-6">ADD TEXT HERE</p>
                </div>
              </div>
              <div className="column">
                <div className="box" style={{
                  height: '100%'
                }}>

                  <h1 className="title has-text-primary is-size-4" style={{
                    padding: '25px 0'
                  }}>Project Management, Scheduling, and Cost Controls</h1>
                  <p className="subtitle has-text-gray is-size-6">ADD TEXT HERE</p>
                </div>
              </div>
              <div className="column">
                <div className="box" style={{
                  height: '100%'
                }}>

                  <h1 className="title has-text-primary is-size-4" style={{
                    padding: '25px 0'
                  }}>Structural Analysis</h1>
                  <p className="subtitle has-text-gray is-size-6">ADD TEXT HERE</p>
                </div>
              </div>
              <div className="column">
                <div className="box" style={{
                  height: '100%'
                }}>

                  <h1 className="title has-text-primary is-size-4" style={{
                    padding: '25px 0'
                  }}>Project Scheduling/Controls</h1>
                  <p className="subtitle has-text-gray is-size-6">ADD TEXT HERE</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
