import PropTypes from 'prop-types';
import data from './data';
import Form from './Form';
import MapData from './MapData';
import PersonalPage from './PersonalPage';
import Home from './Home';
import Main from './Main';
import useContactState from './useContactState';

data.propTypes= {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  AddContact: PropTypes.func.isRequired,
  contactNew: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

MapData.propTypes = {
  contacts: PropTypes.array.isRequired,
  AddContact: PropTypes.func.isRequired,
  Link: PropTypes.elementType,
  image : PropTypes.string.isRequired,
  tbody: PropTypes.elementType
};

PersonalPage.propTypes = {
  contactId: PropTypes.number.isRequired,
  contacts: PropTypes.array.isRequired,
  AddContact: PropTypes.func.isRequired,
  Link: PropTypes.elementType
};

Home.propTypes = {
  contacts: PropTypes.array.isRequired,
  AddContact: PropTypes.func.isRequired,
  Link: PropTypes.elementType
};

Main.propTypes = {
  contacts: PropTypes.array.isRequired,
  AddContact: PropTypes.func.isRequired,
  useContactState: PropTypes.func.isRequired,
  Link: PropTypes.elementType
};

useContactState.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
  AddContact: PropTypes.func.isRequired,
  useState : PropTypes.func.isRequired
};



  














