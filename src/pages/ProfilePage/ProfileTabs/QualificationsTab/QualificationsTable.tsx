import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {RootState} from '../../../../redux';
import {IQualification} from '../../../../interfaces/IQualification';
import {selectProfileQualificationsState} from '../../../../redux/profile/qualifications/selectors';
import {profileQualificationsChangeSort} from '../../../../redux/profile/qualifications/actions';
import thunkProfileQualifications from '../../../../redux/profile/qualifications/thunks';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';


const mapStateToProps = (state: RootState) => ({
	...selectProfileQualificationsState(state)
});

const connected = connect(mapStateToProps, {
	changeSort: profileQualificationsChangeSort,
	load: thunkProfileQualifications
});

type IQualificationsTableProps = ConnectedProps<typeof connected>;
const QualificationsTable: React.FC<IQualificationsTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.qualifications.length)
			props.load();
	}, []);

	return (
		<Table striped bordered hover>
			<thead>
			<tr>
				<th>
					<span className="pull-left">ID</span>
					<SortItem state={props.sort.id} change={props.changeSort} param="id"/>
				</th>

				<th>
					<span className="pull-left">Категория</span>
					<SortItem
						state={props.sort.category}
						change={props.changeSort}
						param="category"
					/>
				</th>

				<th>
					<span className="pull-left">Дата</span>
					<SortItem state={props.sort.date} change={props.changeSort} param="date"/>
				</th>

				<th>Действия</th>
			</tr>
			</thead>
			<tbody>
			{
				props.isLoading &&
				<tr>
					<th colSpan={4} className="text-center">
						<Loader/>
					</th>
				</tr>
			}

			{
				props.error &&
				<tr className="text-center text-danger">
					<th colSpan={4} className="text-center">
						<ErrorElement error={props.error}/>
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error && !props.qualifications.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={4} className="text-center">
						Нет повышений квалификаций подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				props.qualifications.map((qualification: IQualification) => (
					<tr key={qualification.id}>
						<th>{qualification.id}</th>
						<th>{qualification.name}</th>
						<th>{qualification.date}</th>
						<th>
							<Link to={`/qualifications/${qualification.id}`}>
								<i className="fa fa-eye"/>
							</Link>
						</th>
					</tr>
				))
			}
			</tbody>
		</Table>
	);
};

export default connected(QualificationsTable);
