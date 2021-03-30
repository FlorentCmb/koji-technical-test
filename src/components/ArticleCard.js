// Librairies
import { Link } from 'react-router-dom'
// Style
import './ArticleCard.css'

const ArticleCard = ({ articleData }) => {
    return (
        <div className="ArticleCard">
            <Link to={`/article/${articleData.id}`} className="ArticleCard-Title">{articleData.title}</Link>
            <p className="ArticleCard-Content">{articleData.body}</p>
        </div>
    )
}

export default ArticleCard