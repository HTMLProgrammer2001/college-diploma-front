import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Row} from 'react-bootstrap';

import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';


const mapStateToProps = (state: RootState) => ({
	me: selectMeInfo(state)
});

const connected = connect(mapStateToProps, null);

export const ProfileInfo: React.FC<ConnectedProps<typeof connected>> = ({me}) => (
	<Row>
		<div className="col-sm-3 mr-3">
			<img
				src={me.avatar || 'http://127.0.0.1:8000/storage/avatars/default.gif'}
				alt="Avatar"
				style={{width: '100%'}}
			/>
		</div>

		<div>
			<div>Имя: {me.fullName}</div>
			<div>День рождения: {me.birthday}</div>
			<div>Email: {me.email}</div>
			<div>Аддресс: {me.address}</div>
			<div>Роль: {me.role}</div>
			<div>Отдел: {me.department}</div>
			<div>Цикловая комиссия: {me.commission}</div>
			<div>Категория: {me.category}</div>
			<div>Розряд: {me.rank}</div>
			<div>Педагогическое звание: {me.pedagogicalTitle}</div>
			<div>Опыт: {me.experience}</div>
		</div>
	</Row>
);

export default connected(ProfileInfo);
