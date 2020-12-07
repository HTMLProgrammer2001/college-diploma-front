import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import i18next from 'i18next';


i18next.init({});

configure({
	adapter: new Adapter()
});
