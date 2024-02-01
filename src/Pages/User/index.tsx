import { useLocation, useNavigate } from "react-router-dom";
import { User } from "@types";

const UserProfile: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user: User = location.state?.user;

  if (!user.email)
    navigate('/', { replace: true });

  return (
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                  <img src={user?.picture.large} className="shadow-xl rounded-full h-auto align-middle border-none" />
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {`${user?.name.first} ${user?.name.last}`}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {`${user.location.city} - ${user.location.country}`}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                {user.phone}
              </div>
              <div className="mb-2 text-blueGray-600">
                {user.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile;