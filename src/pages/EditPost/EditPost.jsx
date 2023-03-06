import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import {useUpdateDocument} from '../../hooks/useUpdateDocument'
import {useFetchDocument} from '../../hooks/useFetchDocument'
import styles from './EditPost.module.css'

const EditPost = () => {

  const {id} = useParams()
  const {document:post} = useFetchDocument('posts',id)


  const [title,setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body,setBody] = useState('')
  const [tags,setTags] = useState([])
  const [formError,setFormError] = useState('')

  useEffect(()=>{
    if(post){
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)

        const textTags = post.tagsArray.join(', ')

      setTags(textTags)  
    }

  },[post])

  const {user} = useAuthValue()
  const {updateDocument,response} = useUpdateDocument('posts')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()

    setFormError('')

    //validar ur da imagem

    try {
      new URL(image)

    } catch (error) {

      setFormError("A imagem precisa ter uma URL.")
    }

    //criar array de tags

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    //checar os valores

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    //MOSTRAR ERRO 
    if(formError) return
    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }
    updateDocument(id,data)



    //redirect pra
    navigate("/dashboard")


  }

  return (
    <div className={styles.edit_post}>
        <p>Altere os dados do post como desejar</p>
      {post && (<>
        <h2>Editando Post:{post.title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
          <span>Título:</span>
          <input type="text" name="title" required placeholder='Insira um título'
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
          </label>

          <label>
          <span>URL da imagem</span>
          <input type="text" name="image" required placeholder='Insira uma imagem para seu post'
          onChange={(e) => setImage(e.target.value)}
          value={image} />
          </label>
          <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img
              className={styles.image_preview} src={post.image} alt={post.title}/>

          <label>
          <span>Conteúdo</span>
          <textarea  name="body" required placeholder='Insira o conteúdo do post'
          onChange={(e) => setBody(e.target.value)}
          value={body} />
          </label>

          <label>
          <span>Tags</span>
          <input type="text" name="tags" required placeholder='Insira suas tags separadas por vírgula'
          onChange={(e) => setTags(e.target.value)}
          value={tags} />
          </label>
          
          {!response.loading && <button className="btn">Editar</button>}
          {response.loading && <button className="btn" disabled> Editando... </button>}
          {(response.error || formError) && (<p className="error">{response.error || formError}</p>)}
        </form>
      </>)}
        

    </div>
  )
}

export default EditPost