import { User } from "@types"

const ProfileCard: React.FC<{ user: User }> = ({ user }) => {  
  return (
    <div className="max-w-sm mx-auto bg-white dark:border-gray-200 dark:bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="border-b px-4 pb-6">
        <div className="text-center my-4">
          <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
            src={user.picture.medium} alt="user-pic" />
          <div className="py-2">
            <h3 className="font-bold text-2xl text-gray-800 dark:text-black mb-1">
              {user.name.first}
            </h3>
            <h6 className="inline-flex text-gray-700 dark:text-black items-center">
              {user.email}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard