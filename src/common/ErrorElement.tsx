import React from 'react';


type IErrorProps = {
	error?: string
};

const ErrorElement: React.FC<IErrorProps> = ({error}) => (
	<div>{error || 'Произошла ошибка'}</div>
);

export default ErrorElement;
