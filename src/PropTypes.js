import PropTypes from 'prop-types';
import Form from './Form';
import MapData from './MapData';
import PersonalPage from './PersonalPage';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import useContactState from './useContactState';
import { Link } from 'react-router-dom';



Form.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  AddContact: PropTypes.func.isRequired,
  contactNew: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

MapData.propTypes = {
  contacts: PropTypes.array.isRequired,
  AddContact: PropTypes.func.isRequired,
  Link: PropTypes.elementType,

  PersonalPage: PropTypes.elementType,
  MapData: PropTypes.elementType,


};






