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
        <section className="HomePage">
            <h1 className="HomePage-Title">Articles :</h1>
            <div className="HomePage-Articles-Container">
                {articles.length > 0 && articles.map(article => (
                    <ArticleCard articleData={article} key={`Article n°${article.id}`} />
                ))}
            </div>
        </section>
    )
}

export default HomePage