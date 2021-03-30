// Style
import './ArticleCard.css'

const ArticleCard = ({ articleData }) => {
    return (
        <div className="ArticleCard">
            <h4 className="ArticleCard-Title">{articleData.title}</h4>
            <p className="ArticleCard-Content">{articleData.body}</p>
        </div>
    )
}

export default ArticleCard