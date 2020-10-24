import {IProfileEditData} from '../../pages/ProfileEditPage/EditProfileForm';


export default (vals: IProfileEditData): FormData => {
	let formData = new FormData();

	if(vals.birthday) {
		let d = new Date(vals.birthday);
		vals.birthday = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
	}

	for(let key in vals){
		formData.append(key, (vals as any)[key]);
	}

	return formData;
};
