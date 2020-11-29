import {IUsersFilterData} from '../../pages/Users/all/UsersFilterForm';
import {IExample} from '../../interfaces/IExample';
import download from '../helpers/download';


const reportApi = {
	generateReport(filters?: IUsersFilterData): IExample{
		return download(`${process.env.REACT_APP_SERVER_URL}/report`, {
			params: {...filters}
		});
	}
};

export default reportApi;
