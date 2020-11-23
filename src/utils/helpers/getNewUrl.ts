import queryString from "querystring";
import moment from 'moment';
import {Location, LocationDescriptorObject} from 'history';


//function to get new route with added query data
const getNewUrl = (location: Location, newValues: {[key: string]: any}): LocationDescriptorObject => {
	//parse query params from string
	let parsedQ: any = queryString.parse(location.search.slice(1)),
		filteredValues: {[key: string]: any} = {};

	//filter object
	for(let key in newValues){
		if(newValues[key]) {
			if(newValues[key] instanceof Date)
				filteredValues[key] = moment(newValues[key]).format('MM.DD.YYYY');
			else
				filteredValues[key] = newValues[key];
		}
	}

	//merge new values with QP
	let str = queryString.encode({...parsedQ, ...filteredValues});

	//return new url object
	return {
		pathname: location.pathname,
		hash: location.hash,
		search: `?${str}`
	}
};

export default getNewUrl;
