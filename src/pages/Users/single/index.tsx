import React from 'react';
import {RouteComponentProps} from 'react-router';

import ProfilePage from '../../ProfilePage/';


type ISingleUserProps = RouteComponentProps<{id: string}>;
const SingleUserPage: React.FC<ISingleUserProps> = (props) => (
	<ProfilePage userID={+props.match.params.id}/>
);

export default SingleUserPage;
