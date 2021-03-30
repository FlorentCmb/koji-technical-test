// Librairies
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
// Style
import './ArticlePage.css'

const ArticlePage = () => {

    // Reacct router params
    const { id } = useParams()
    // State
    const [article, setArticle] = useState()

    // useEffect
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => setArticle(response.data))
        .catch(error => console.log(error))
    }, [])

    // Functions
    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1) + "."
    }

    // Render
    return (
        <div className="ArticlePage">
            {article && (
                <div className="ArticlePage-Container">
                    <h2 className="ArticlePage-Title">{article.title}</h2> <span className="ArticlePage-Number">(article n°{article.id})</span>
                    <p className="ArticlePage-Body">{capitalizeFirstLetter(article.body)}</p>
                </div>
            ) || "No articles"}
        </div>
    )
}

export default ArticlePage