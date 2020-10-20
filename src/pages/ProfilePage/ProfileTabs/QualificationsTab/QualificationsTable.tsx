import React from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {RootState} from '../../../../redux';
import {selectInternshipsShowState} from '../../../../redux/internships/show/selectors';
import {internshipsShowChangeSort} from '../../../../redux/internships/show/actions';
import {IInternship} from '../../../../interfaces/IInternship';


const mapStateToProps = (state: RootState) => ({
	...selectInternshipsShowState(state)
});

const connected = connect(mapStateToProps, {
	changeSort: internshipsShowChangeSort
});

type IInternshipsTableProps = ConnectedProps<typeof connected>;
const QualificationsTable: React.FC<IInternshipsTableProps> = (props) => (
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>
				<span className="pull-left">ID</span>
				<i className={cn("fa cur pull-right", {
					["fa-sort-amount-asc"]: props.sort.id == 1 || props.sort.id == undefined,
					["fa-sort-amount-desc"]: props.sort.id == -1,
					["opacity-5"]: props.sort.id == undefined,
				})}
				   onClick={() => props.changeSort('id')}
				/>
			</th>

			<th>
				<span className="pull-left">Категория</span>
				<i className={cn("fa cur pull-right", {
					["fa-sort-amount-asc"]: props.sort.category == 1 || props.sort.category == undefined,
					["fa-sort-amount-desc"]: props.sort.category == -1,
					["opacity-5"]: props.sort.category == undefined,
				})}
				   onClick={() => props.changeSort('category')}
				/>
			</th>

			<th>
				<span className="pull-left">Тема</span>
				<i className={cn("fa cur pull-right", {
					["fa-sort-amount-asc"]: props.sort.theme == 1 || props.sort.theme == undefined,
					["fa-sort-amount-desc"]: props.sort.theme == -1,
					["opacity-5"]: props.sort.theme == undefined,
				})}
				   onClick={() => props.changeSort('theme')}
				/>
			</th>

			<th>
				<span className="pull-left">Количество часов</span>
				<i className={cn("fa cur pull-right", {
					["fa-sort-amount-asc"]: props.sort.hours == 1 || props.sort.hours == undefined,
					["fa-sort-amount-desc"]: props.sort.hours == -1,
					["opacity-5"]: props.sort.hours == undefined,
				})}
				   onClick={() => props.changeSort('hours')}
				/>
			</th>

			<th>
				<span className="pull-left">Дата окончания</span>
				<i className={cn("fa cur pull-right", {
					["fa-sort-amount-asc"]: props.sort.end_date == 1 || props.sort.end_date == undefined,
					["fa-sort-amount-desc"]: props.sort.end_date == -1,
					["opacity-5"]: props.sort.end_date == undefined,
				})}
				   onClick={() => props.changeSort('end_date')}
				/>
			</th>

			<th>Действия</th>
		</tr>
		</thead>
		<tbody>
			{
				props.isLoading &&
					<tr>
						<th colSpan={6} className="text-center">
							Loading...
						</th>
					</tr>
			}

			{
				props.error &&
					<tr className="text-center text-danger">
						<th colSpan={6} className="text-center">
							Error
						</th>
					</tr>
			}

			{
				!props.isLoading && !props.error && !props.internships.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							Нет стажировок подходящих под этот фильтр
						</th>
					</tr>
			}

			{
				!props.isLoading && !props.error &&
					props.internships.map((internship: IInternship) => (
						<tr key={internship.id}>
							<th>{internship.user.fullName}</th>
							<th>{internship.category.name}</th>
							<th>{internship.title}</th>
							<th>{internship.hours}</th>
							<th>{internship.to}</th>
							<th>
								<Link to={`/internships/${internship.id}`}>
									<i className="fa fa-eye"/>
								</Link>
							</th>
						</tr>
					))
			}
		</tbody>
	</Table>
);

export default connected(QualificationsTable);
