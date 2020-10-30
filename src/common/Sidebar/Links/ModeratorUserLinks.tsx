import React from 'react';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const ModeratorUserLinks: React.FC<{}> = () => (
	<>

	</>
);

export default IsUserRoleMore(Roles.MODERATOR)(ModeratorUserLinks);
