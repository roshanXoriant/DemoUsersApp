import React from 'react';
import {shallow} from 'enzyme';
import UserDetail from './UserDetail';

describe('UserDetail', () => {
  it('should render without crashing', () => {
    const navigation = {
      state: {
        params: {
          guid: '61F59E28-138D-AD45-6B0C-189A81A7C2CD',
          firstname: 'Hasad',
          lastname: 'Walters',
          zip: '72526',
          address: '9308 Neque. Avenue',
          email: 'ultrices.mauris@Cras.com',
          bio:
            'nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing',
          hobbies: 'movies',
        },
      },
    };
    const props = {
      navigation,
    };
    const wrapper = shallow(<UserDetail {...props} />);
    expect(wrapper.children().find('Text')).toHaveLength(6);
  });
});
