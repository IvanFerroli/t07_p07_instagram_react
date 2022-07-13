import Stories from './Stories'
import Posts from './Posts'
import Aside from './Aside'

export default function Main() {
    return(
       <>
            <main>
                <div className="feed">
                    <Stories />
                    <Posts />
                    <Aside />
                </div>
            </main>
        </>
    )
}