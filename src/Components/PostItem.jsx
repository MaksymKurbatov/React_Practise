import React from 'react';
import Mybutton from "./UI/button/Mybutton";

const PostItem = (props) => {
    function deletePost (){
        props.remove(props.post);
    }
    return (
        <div>
            <div className="post">
                <div className="post__contetn">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <Mybutton onClick={deletePost}> remove</Mybutton>
                </div>

            </div>
        </div>
    );
};

export default PostItem;