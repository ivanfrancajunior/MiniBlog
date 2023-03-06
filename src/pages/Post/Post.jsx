import styles from './Post.module.css';
import React from 'react';

//hooks 
import {useParams} from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {

    const {id} = useParams()
    const {document:post,loading} = useFetchDocument('posts',id)
    return (
    <div className={styles.post_container}>
        <h1>Post</h1>
        {loading && <p>Carregando post...</p>}
        {post && (
            <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.image} />
            <p>{post.body}</p>
            <h3>Esse post trata sobre</h3>
            <div className={styles.tags}>
            {post.tagsArray.map((tag) =>(
                <p key={tag}>
                    <span>#</span> {tag}
                </p>
            ))}
            </div>
            </>
            )}
        
        
    </div>
  )
}

export default Post