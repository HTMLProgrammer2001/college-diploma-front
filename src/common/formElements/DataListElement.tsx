import React, {useEffect, useState} from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import {WrappedFieldProps} from 'redux-form';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';

import useHttp from '../../utils/hooks/useHttp';
import {IGeneralPaginationResponse} from '../../interfaces/responses/IGeneralPaginationResponse';
import debounce from '../../utils/helpers/debounce';


type IDataListOwnProps = {
	url: string,
	id: string,
	placeholder?: string,
	size?: number
};

type IOption = {
	id: number,
	title: string
};

type IDataListElementProps = WrappedFieldProps & IDataListOwnProps;
const DataListElement: React.FC<IDataListElementProps> = (props) => {
	const {id, placeholder, url, size = 5, input: {onChange, name}} = props;

	//hooks
	const [query, setQuery] = useState(null);
	const {request, error, isLoading, data: reqData} = useHttp<IGeneralPaginationResponse<IOption>>();

	//hook query changes
	useEffect(() => {
		if (query != null && query.length >= 1)
			makeRequest();
	}, [query]);

	//wrapper for making http request
	const makeRequest = async (page = 1) => {
		const data = {q: query, page, pageSize: size};
		await request({url, data});
	};

	//input change handler
	const onInputChange = debounce(async (query: string) => {
		//change cur query
		onChange(null, name);
		setQuery(query);
	}, 500);

	const onPaginate = async () => {
		//get items from next page
		await makeRequest(reqData.meta.current_page + 1);
	};

	const onSelect = (id: number) => {
		onChange(id as any, name);
	};

	return (
		<FormGroup controlId={id}>
			{
				placeholder &&
					<FormLabel column={true}>{placeholder}</FormLabel>
			}

			<AsyncTypeahead
				onInputChange={onInputChange}
				onPaginate={onPaginate}
				onSearch={() => {
					console.log('Search')
				}}
				filterBy={['title']}
				labelKey="title"
				delay={500}

				id={id}
				maxResults={size}
				minLength={1}
				options={[{id: -1, title: 'All'}, ...(reqData?.data ? reqData.data : [])]}
				isLoading={isLoading}
				placeholder={placeholder}
				paginate
				emptyLabel="No items"
				searchText="Search..."
				isInvalid={!!error}

				renderMenuItemChildren={(option: IOption) => (
					<div key={option.id} onClick={() => onSelect(option.id)}>
						{option.title}
					</div>
				)}
			/>

			{
				error &&
				<FormControl.Feedback type="invalid" style={{display: 'block'}}>
					{props.meta.touched && error}
				</FormControl.Feedback>
			}
		</FormGroup>
	);
};

export default DataListElement;
