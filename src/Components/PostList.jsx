import React from "react";
import PostItem from "./PostItem";
import TransitionGroup from "react-transition-group/cjs/TransitionGroup";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const PostList = ({post, titel, remove}) => {
    return (
        <div>
            <h1>
                {titel}
            </h1>
            <TransitionGroup>
                {post.map((postila, index) =>
                    <CSSTransition
                    key={postila.id}
                    timeout={500}
                    classNames="post"
                    >
                        <PostItem remove={remove} number={index} post={postila} key={postila.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;