import React from 'react';
import {shallow} from 'enzyme';
import Dashboard, {pushToUserDetailScreen} from './Dashboard';
import {
  WEBSERICE_URL,
  WEBSERVICE_METHODS,
} from '../../GlobalConstants/Constants';

describe('Dashboard', () => {
  it('should render without crashing', () => {
    const item = {
      guid: '61F59E28-138D-AD45-6B0C-189A81A7C2CD',
      firstname: 'Hasad',
      lastname: 'Walters',
      zip: '72526',
      address: '9308 Neque. Avenue',
      email: 'ultrices.mauris@Cras.com',
      bio:
        'nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing',
      hobbies: 'movies',
    };
    const pushToUserDetailScreen = jest.fn();
    const props = {
      item,
      pushToUserDetailScreen,
    };
    const wrapper = shallow(<Dashboard {...props} />);
    pushToUserDetailScreen(props.item);
    expect(wrapper.children().find('View')).toHaveLength(1);
  });
  it('fetch data from server', async () => {
    expect.assertions(1);
    const response = await fetch(
      'https://testuserapidev.herokuapp.com/api/v1/getAllUsers',
    );
    expect(response).toBeDefined();
  });
});
