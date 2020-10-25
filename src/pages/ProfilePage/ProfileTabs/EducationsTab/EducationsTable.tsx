import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../../redux';
import {IEducation} from '../../../../interfaces/models/IEducation';
import {selectProfileEducationsState} from '../../../../redux/profile/educations/selectors';
import {profileEducationsChangeSort} from '../../../../redux/profile/educations/actions';
import thunkProfileEducations from '../../../../redux/profile/educations/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';

import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';


const mapStateToProps = (state: RootState) => ({
	...selectProfileEducationsState(state)
});

const connected = connect(mapStateToProps, {
	changeSort: profileEducationsChangeSort,
	load: thunkProfileEducations
});

type IRebukesTableProps = ConnectedProps<typeof connected>;
const EducationsTable: React.FC<IRebukesTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.educations.length)
			props.load();
	}, []);

	return (
		<Table striped bordered hover>
			<thead>
			<tr>
				<th>
					<span className="pull-left">ID</span>

					<SortItem
						state={findSortRule(props.sort, 'ID')?.direction}
						change={props.changeSort}
						param="ID"
					/>
				</th>

				<th>
					<span className="pull-left">Учебное заведение</span>

					<SortItem
						state={findSortRule(props.sort, 'institution')?.direction}
						change={props.changeSort}
						param="institution"
					/>
				</th>

				<th>
					<span className="pull-left">Год выпуска</span>

					<SortItem
						state={findSortRule(props.sort, 'graduate_year')?.direction}
						change={props.changeSort}
						param="graduate_year"
					/>
				</th>

				<th>
					<span className="pull-left">Квалификация</span>

					<SortItem
						state={findSortRule(props.sort, 'qualification')?.direction}
						change={props.changeSort}
						param="qualification"
					/>
				</th>

				<th>Действия</th>
			</tr>
			</thead>
			<tbody>
			{
				props.isLoading &&
				<tr>
					<th colSpan={5} className="text-center">
						<Loader/>
					</th>
				</tr>
			}

			{
				props.error &&
				<tr className="text-center text-danger">
					<th colSpan={5} className="text-center">
						<ErrorElement error={props.error}/>
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error && !props.educations.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={6} className="text-center">
						Нет наград подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				props.educations.map((education: IEducation) => (
					<tr key={education.id}>
						<th>{education.id}</th>
						<th>{education.institution}</th>
						<th>{education.graduate_year}</th>
						<th>{education.qualification}</th>
						<th>
							<Link to={`/educations/${education.id}`}>
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

export default connected(EducationsTable);
