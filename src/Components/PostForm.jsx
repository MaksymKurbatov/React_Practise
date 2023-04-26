import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import Mybutton from "./UI/button/Mybutton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:"", body:""})

    function addNewPost(event) {
        event.preventDefault();
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            {/* управляемый компонет*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title:e.target.value })}
                type="text"
                placeholder="Название"/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body:e.target.value })}
                type="text"
                placeholder="Описание"/>
            <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
        </div>
    );
};

export default PostForm;