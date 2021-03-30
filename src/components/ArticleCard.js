// Librairies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
// Style
import defaultBackground from '../assets/defaultBackground.jpg'
import './ArticleCard.css'

const ArticleCard = ({ articleData }) => {

    // State
    const [redirecting, setRedirecting] = useState(false)

    // Functions
    const getPreview = text => {
        return `${text.slice(0, 70)}...`
    }

    const redirect = () => setRedirecting(true)

    return (
        <div className="ArticleCard" onClick={redirect}>
            <img className="ArticleCard-Picture" src={defaultBackground} alt={`Article n°${articleData.id}'s picture`} />
            <h3 to={`/article/${articleData.id}`} className="ArticleCard-Title" title={`Visit article n°${articleData.id}`}>{articleData.title}</h3>
            <p className="ArticleCard-TextPreview">{getPreview(articleData.body)}</p>
            {redirecting ? <Redirect to={`/article/${articleData.id}`} /> : ""}
        </div>
    )
}

export default ArticleCard