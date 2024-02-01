const getRandomUsers = async ({ page }: { page?: number } = { page: 1 }) => {
	try {
		const response = await fetch(`https://randomuser.me/api?page=${page}&results=9&seed=random&inc=gender,name,email,phone,picture,location`);
		return await response.json();
	}
	catch (error) {
		console.log(`Error Fetching Users: ${error}`);
	}
}

export default getRandomUsers;