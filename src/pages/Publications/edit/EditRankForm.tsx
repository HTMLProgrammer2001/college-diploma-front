import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import {RootState} from '../../../redux';
import {selectEditRank} from '../../../redux/ranks/edit/selectors';


const mapStateToProps = (state: RootState) => ({
	rank: selectEditRank(state)
});

const connected = connect(mapStateToProps);

export type IRanksEditData = {
	name: string
};

type IOwnProps = ConnectedProps<typeof connected>;

type IRanksEditFormProps = InjectedFormProps<IRanksEditData, IOwnProps> & IOwnProps;
const RanksEditForm: React.FC<IRanksEditFormProps> = ({handleSubmit, rank, initialize}) => {
	useEffect(() => {
		initialize({name: rank.name});
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
					label={t('ranks.edit.name')}
				/>
			</Col>
		</form>
	);
};

export default connected(
	reduxForm<IRanksEditData, IOwnProps>({
		form: 'ranksEditForm'
	})(RanksEditForm)
);
