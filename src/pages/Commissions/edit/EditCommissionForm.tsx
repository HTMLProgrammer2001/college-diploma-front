import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../../common/formElements/InputElement';
import {RootState} from '../../../redux';
import {selectEditCommission} from '../../../redux/commissions/edit/selectors';
import {useTranslation} from 'react-i18next';


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

	const {t} = useTranslation();

	return (
		<form onSubmit={handleSubmit}>
			<Col xs={12} md={6} xl={4}>
				<Field
					component={InputElement}
					type="text"
					name="name"
					className="m-0"
					label={t('commissions.edit.name')}
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
