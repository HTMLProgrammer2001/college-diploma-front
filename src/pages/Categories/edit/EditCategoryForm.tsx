import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import {RootState} from '../../../redux';
import {selectEditCategory} from '../../../redux/categories/edit/selectors';


const mapStateToProps = (state: RootState) => ({
	category: selectEditCategory(state)
});

const connected = connect(mapStateToProps);

export type ICategoriesEditData = {
	name: string
};

type IOwnProps = ConnectedProps<typeof connected>;

type ICategoriesEditFormProps = InjectedFormProps<ICategoriesEditData, IOwnProps> & IOwnProps;
const CategoriesEditForm: React.FC<ICategoriesEditFormProps> = ({handleSubmit, category, initialize}) => {
	useEffect(() => {
		initialize({name: category.name});
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
					label={t('categories.edit.name')}
				/>
			</Col>
		</form>
	);
};

export default connected(
	reduxForm<ICategoriesEditData, IOwnProps>({
		form: 'categoriesEditForm'
	})(CategoriesEditForm)
);
