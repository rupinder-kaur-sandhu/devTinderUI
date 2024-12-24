import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  console.log("Getting to know connections ", connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      console.log(res.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <h1>No connections found</h1>;
  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-green text-5xl">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, about, _id } = connection;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 bg-base-300 rounded-lg w-1/2 mx-auto"
          >
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
