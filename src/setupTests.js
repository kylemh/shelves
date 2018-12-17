import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-prop-type-error';
import 'jest-enzyme';

configure({ adapter: new Adapter() });
