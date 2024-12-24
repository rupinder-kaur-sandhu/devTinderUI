import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export const EditProfile = ({ user }) => {
  console.log("user firstname and lastname", user.firstName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      setError("");
      console.log("checking cors issue");
      const res = await axios.post(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, about },
        { withCredentials: true }
      );
      console.log("Lets see what res has in it", res);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">FirstName:</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs my-2"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <div className="label"></div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">LastName:</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs my-2"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <div className="label"></div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Age:</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs my-2"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                  <div className="label"></div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Gender:</span>
                  </div>
                  <input
                    type="text"
                    value={gender}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs my-2"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <div className="label"></div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">About:</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs my-2"
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                  />
                  <div className="label"></div>
                </label>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard feed={{ firstName, lastName, age, gender, about }}></UserCard>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile changes submitted.</span>
          </div>
        </div>
      )}
    </>
  );
};
