import React from 'react';
import cn from 'classnames';


type ISortItemProps = {
	state: -1 | 1 | undefined,
	change: (param: string) => void,
	param: string
};

const SortItem: React.FC<ISortItemProps> = ({state, change, param}) => (
	<i className={cn("fa cur pull-right", {
		["fa-sort-amount-asc"]: state == 1 || state == undefined,
		["fa-sort-amount-desc"]: state == -1,
		["opacity-5"]: state == undefined,
	})}
	   onClick={() => change(param)}
	/>
);

export default SortItem;
