import React from 'react';
import i18next from 'i18next';


type IErrorProps = {
	error?: string
};

const ErrorElement: React.FC<IErrorProps> = ({error}) => (
	<div>{error || i18next.t('common.errorOccurred')}</div>
);

export default ErrorElement;
