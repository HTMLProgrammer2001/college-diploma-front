import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import RanksFilterForm from './RanksFilterForm';
import RanksTable from './RanksTable';
import Paginator from '../../../common/Paginator';
import {selectAllRanksPagination} from '../../../redux/ranks/all/selectors';
import thunkAllRanks from '../../../redux/ranks/all/thunks';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllRanksPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllRanks});

type IAllRanksPageProps = ConnectedProps<typeof connected>;
const AllRanksPage: React.FC<IAllRanksPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('ranks.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('ranks.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/ranks/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<RanksFilterForm onSubmit={() => changePage(1)}/>
					</div>

					<RanksTable/>

					<div className="d-flex my-3 justify-content-end">
						<Paginator {...paginator} setCur={changePage}/>
					</div>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default connected(AllRanksPage);
