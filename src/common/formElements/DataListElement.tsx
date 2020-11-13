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
	size?: number,
	multiple?: boolean,
	isFilter?: boolean
};

type IOption = {
	id: number,
	title: string
};

type IDataListElementProps = WrappedFieldProps & IDataListOwnProps;
const DataListElement: React.FC<IDataListElementProps> = (props) => {
	const {id, placeholder, url, size = 5, multiple, isFilter, input: {onChange, name, value}} = props;

	//hooks
	const [query, setQuery] = useState(null);
	const [selected, setSelected] = useState<IOption[]>([]);
	const {request, error, isLoading, data: reqData} = useHttp<IGeneralPaginationResponse<IOption>>();

	//hook query changes
	useEffect(() => {
		if (query != null && query.length >= 1)
			makeRequest();
	}, [query]);

	//hook for selected
	useEffect(() => {
		if(!multiple)
			setSelected(value ? selected.filter(({id}) => id == value) : []);
		else
			setSelected(value ? selected.filter(({id}) => value.includes(id)) : []);
	}, [value]);

	//wrapper for making http request
	const makeRequest = async (page = 1) => {
		const data = {q: query, page, pageSize: size};
		await request({url, data});
	};

	//input change handler
	const onInputChange = debounce(async (query: string) => {
		//change cur query
		setQuery(query);
	}, 500);

	const onSelect = (selectedOptions: IOption[]) => {
		setSelected(selectedOptions);

		if(!multiple) {
			if (!selectedOptions.length)
				onChange(null, name);
			else
				onChange(selectedOptions[0].id as any, name);
		}
		else
			onChange(selectedOptions.map((opt) => opt.id) as any, name);
	};

	return (
		<FormGroup controlId={id}>
			{
				placeholder &&
					<FormLabel column={true}>{placeholder}</FormLabel>
			}

			<AsyncTypeahead
				onInputChange={onInputChange}
				onSearch={() => {console.log('Search')}}
				filterBy={['title']}
				labelKey="title"

				id={name}
				maxResults={size}
				minLength={1}
				options={(isFilter ? [{id: -1, title: 'All'}] : []).concat(reqData?.data ? reqData.data : [])}
				isLoading={isLoading}
				emptyLabel="No items"
				searchText="Search..."
				isInvalid={!!error}
				onChange={onSelect}
				selected={selected}
				multiple={multiple}

				renderMenuItemChildren={(option: IOption) => (
					<div key={option.id}>
						{option.title}
					</div>
				)}
			/>

			{
				props.meta.touched && (error || props.meta.error) &&
				<FormControl.Feedback type="invalid" style={{display: 'block'}}>
					{error || props.meta.error}
				</FormControl.Feedback>
			}
		</FormGroup>
	);
};

export default DataListElement;
