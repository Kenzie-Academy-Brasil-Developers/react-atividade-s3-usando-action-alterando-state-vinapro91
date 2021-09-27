import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
      <p>{user.name}</p>
    </div>
  );
};

export default UserCard;
