// Librairies
import axios from 'axios'
import { useState, useEffect } from 'react'
// Component
import ArticleCard from '../components/ArticleCard'
// Style
import './HomePage.css'

const HomePage = () => {

    // States
    const [articles, setArticles] = useState([])

    // useEffect
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setArticles(response.data)

        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="HomePage">
            {articles.length > 0 ? (
                <div className="HomePage-Articles-Container">
                    {articles.map(article => (
                        <ArticleCard articleData={article} key={`Article n°${article.id}`} />
                    ))}
                </div>
            ) : (
            <div className="HomePage-NoData">
                No articles.
            </div>
            )}
        </div>
    )
}

export default HomePage