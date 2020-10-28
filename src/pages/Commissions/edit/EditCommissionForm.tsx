import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../../common/formElements/InputElement';
import {RootState} from '../../../redux';
import {selectEditCommission} from '../../../redux/commissions/edit/selectors';


const mapStateToProps = (state: RootState) => ({
	commission: selectEditCommission(state)
});

const connected = connect(mapStateToProps);

export type ICommissionsEditData = {
	name: string
};

type IOwnProps = ConnectedProps<typeof connected>;

type ICommissionsEditFormProps = InjectedFormProps<ICommissionsEditData, IOwnProps> & IOwnProps;
const CommissionsEditForm: React.FC<ICommissionsEditFormProps> = ({handleSubmit, commission, initialize}) => {
	useEffect(() => {
		initialize({name: commission.name});
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<Col xs={4}>
				<Field
					component={InputElement}
					type="text"
					name="name"
					className="m-0"
					label="Название отделения"
				/>
			</Col>
		</form>
	);
};

export default connected(
	reduxForm<ICommissionsEditData, IOwnProps>({
		form: 'commissionsEditForm'
	})(CommissionsEditForm)
);
