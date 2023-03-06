import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import {useInsertDocument} from '../../hooks/useInsertDocument'
import styles from './CreatePost.module.css'

const CreatePost = () => {
  const [title,setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body,setBody] = useState('')
  const [tags,setTags] = useState([])
  const [formError,setFormError] = useState('')

  const {user} = useAuthValue()
  const {insertDocument,response} = useInsertDocument('posts')
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

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })



    //redirect pra
    navigate("/")


  }

  return (
    <div className={styles.create_post}>
        <h2>Criar Post</h2>
        <p>Escreva sobre o q quiser e compartilhe!</p>

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
          
          {!response.loading && <button className="btn">Criar!</button>}
          {response.loading && <button className="btn" disabled> Criando... </button>}
          {(response.error || formError) && (<p className="error">{response.error || formError}</p>)}
        </form>

    </div>
  )
}

export default CreatePost