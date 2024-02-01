import { UserFilterControlsProps } from "@types";

const UserFilterControls: React.FC<UserFilterControlsProps> = (props) => {
  return (
    <div className="my-3 mb-4 grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center">
      <div className="col-auto">
        <select
          className="form-select md:form-select-md m-2 p-2.5 w-full"
          onChange={props.filterGender}
        >
          <option value="All">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="col-auto">
        <input
          type="text"
          className="form-input md:form-input-md p-2.5 w-full"
          placeholder="Search..."
          onChange={props.handleSearch}
        />
      </div>
    </div>
  );
}

export default UserFilterControls;
