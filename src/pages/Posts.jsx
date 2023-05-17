import React, {useEffect, useMemo, useRef, useState} from "react";
import {useSortedPosts} from "../hookss/usePosts";
import PostServices from "../api/PostServices";
import {useFetching} from "../hookss/useFetching";
import Pagination from "../Components/UI/pagination/Pagination";
import PostList from "../Components/PostList";
import PostFilter from "../Components/PostFilter";
import PostForm from "../Components/PostForm";
import MyModal from "../Components/UI/MyModal/MyModal";
import Mybutton from "../Components/UI/button/Mybutton";
import {getPageCount} from "../Components/utils/pages";
import Loader from "../Components/UI/Loader";


function Posts() {
    const [posts, setPosts] = useState([
            {id: 1, title: "JavaSc", body: "Description"},
            {id: 2, title: "C#", body: "Govno"},
            {id: 3, title: "Pyton", body: "Call"},
        ]
    )
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedPosts = useSortedPosts(posts, filter.sort);


    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)


    const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServices.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPost();
    }, [page])

    console.log(totalPages)

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    //получаем пост из дочернего компонента
    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
    }


    return (
        <div className="App">
            <Mybutton style={{marginTop: '20px'}} onClick={() => setModal(true)}>
                Create
            </Mybutton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
            <h1>Произошла чудовищная ошибка </h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <PostList remove={removePost} post={sortedPosts} titel="SOME TITEL"/>
            }
            {posts.length !== 0
                //  ? <PostList remove={removePost} post={sortedPosts} titel="SOME TITEL"/>
                // : <h1 style={{textAlign: 'center'}}>"NO POSTS"</h1>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;