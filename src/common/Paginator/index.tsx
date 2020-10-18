import React, {useState} from 'react';
import {Pagination} from 'react-bootstrap';


type IPaginatorProps = {
	total: number,
	curPage: number,
	size: number,
	setCur: (page: number) => void
};

const Paginator: React.FC<IPaginatorProps> = ({total, curPage, size, setCur}) => {
	let hasPrev = curPage > size,
		hasNext = total > (Math.floor((curPage - 1) / size) + 1) * size,
		curPaginator = Math.floor((curPage - 1) / size);

	if (total <= 1)
		return null;

	return (
		<Pagination>
			{
				hasPrev &&
					<Pagination.Item onClick={() => setCur((curPaginator - 1) * size + 1)}>
						&lt;
					</Pagination.Item>
			}

			{
				new Array(size).fill('').map((val, index) => {
					const curItemNumber = curPaginator * size + index + 1;

					if(curItemNumber > total)
						return null;

					return (
						<Pagination.Item
							key={index}
							active={curPage == curItemNumber}
							onClick={() => setCur(curItemNumber)}
						>
							{curItemNumber}
						</Pagination.Item>
					);
				})
			}

			{
				hasNext &&
					<Pagination.Item onClick={() => setCur((curPaginator + 1) * size + 1)}>
						&gt;
					</Pagination.Item>}
		</Pagination>
	);
};

export default Paginator;
