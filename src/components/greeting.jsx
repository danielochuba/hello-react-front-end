import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../redux/message/messageSlice";

function Message () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessage());
    }, [dispatch]);

    const message = useSelector((state) => state.message.message);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Message;
