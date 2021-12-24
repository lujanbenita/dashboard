import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import LayoutDashboard from '../layout/layoutDashboard';
import { updatePost } from '../redux/user/userAction';

const Post = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [content, setContent] = useState(user.post)

  const handleOnChange = (e) => {
    setContent(e.target.value)
    dispatch(updatePost(e.target.value))
  }


  return (
    <LayoutDashboard footer={false}  title={"POST"}>
      <section className="notes__post">
        <textarea
          name="textarea"
          onChange={handleOnChange}
          value={content}
          placeholder="Write here">
          {content !== undefined && content}
        </textarea>
      </section>
    </LayoutDashboard >
  );
};

export default Post;