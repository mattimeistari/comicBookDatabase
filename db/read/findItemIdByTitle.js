export const findItemIdByTitle = (rolesArray, titleToFind) => {
	const role = rolesArray.find(role => role.title === titleToFind);
	return role ? role.roleId : null;
};