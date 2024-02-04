import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { User } from "@types";
import getRandomUsers from "Api";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "Components/Loader";
import ProfileCard from "Components/ProfileCard";
import UserFilterControls from "./UserFilterControls";

interface UsersListingProps {
	page?: number,
	noOfResults?: number
}

const UsersListing: React.FC<UsersListingProps> = (props) => {
	const [page, setPage] = useState<number>(1);
	const [users, setUsers] = useState<User[]>([]);
	const [searchInput, setSearchInput] = useState<string>("");
	const [filterParam, setFilterParam] = useState<string>("All");
	const [searchParam] = useState<string[]>(["fname", "lname", "email"]);
	const [loading, setLoading] = useState<boolean>(true);
	let usersData = Object.values(users);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	}

	const filterGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterParam(e.target.value);
	}

	useEffect(() => {
		setLoading(true);
		getRandomUsers({ page: props.page || 1 }).then(res => {
			setUsers(res);
			setLoading(false);
		}).catch(err => {
			console.error(err);
		});
	}, [props.page]);

	const fetchData = async () => {
		getRandomUsers({ page: page + 1 }).then(res => {
			setPage(page + 1);
			setUsers(users.concat(res));
			setLoading(false);
		}).catch(err => {
			console.error(err);
		});
	};

	const filterAndSearch = (users: User[]): User[] => {
		const normalizedSearch = searchInput.toLowerCase();

		return users.filter(user => {
			const firstName = user.name.first.toLowerCase();
			const lastName = user.name.last.toLowerCase();
			const itemGender = user.gender.toLowerCase();

			if ((filterParam === "All" || itemGender === filterParam) &&
				searchParam.some(param => {
					let propValue: string;

					if (param === 'fname')
						propValue = firstName;
					else if (param === 'lname')
						propValue = lastName;
					else
						propValue = (user[param as keyof User] as string).toLowerCase();

					return propValue.includes(normalizedSearch);
				})) {
				return true;
			}

			return false;
		});
	};

	return (
		<div className="container">
			<UserFilterControls filterGender={filterGender} handleSearch={handleSearch} />
			<InfiniteScroll
				dataLength={usersData.length}
				next={fetchData}
				hasMore={true}
				loader={<Loader />}
				style={{ overflow: "none" }}
			>
				{loading && <Loader />}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{filterAndSearch(usersData).map((user) => (
						<div className="col-span-1 my-3" key={user.email}>
							<Link to={`/user`} state={{ user }}>
								<ProfileCard user={user} />
							</Link>
						</div>
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
}

UsersListing.defaultProps = {
	page: 1,
	noOfResults: 9
}

export default UsersListing;
