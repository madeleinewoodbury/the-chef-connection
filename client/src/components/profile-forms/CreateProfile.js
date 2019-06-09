import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    restaurant: '',
    website: '',
    location: '',
    status: '',
    favorites: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    youtube: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    restaurant,
    website,
    location,
    status,
    favorites,
    bio,
    twitter,
    facebook,
    linkedin,
    instagram,
    youtube
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required fields</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Line Cook">Line Cook</option>
            <option value="Sous Chef">Sous Chef</option>
            <option value="Executive Chef">Executive Chef</option>
            <option value="Chef de Cuisine">Chef de Cuisine</option>
            <option value="Dishwasher">Dishwasher</option>
            <option value="Butcher">Butcher</option>
            <option value="Pastry Chef">Pastry Chef</option>
            <option value="Prep Cook">Prep Cook</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="restaurant"
            placeholder="Restaurant"
            value={restaurant}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Restaurant, hotel or other company you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={website}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Could be your own or restaurant website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            City & state suggested (eg. Chicago, IL)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="favorites"
            placeholder="Favorite Foods"
            value={favorites}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values for your favorite foods (eg.
            Pizza,Lasagne)
          </small>
        </div>
        <div className="form-group">
          <textarea
            name="bio"
            placeholder="A short bio of yourself"
            value={bio}
            onChange={e => onChange(e)}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="Youtube URL"
                name="youtube"
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/dashboard" className="btn btn-light my-1">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
