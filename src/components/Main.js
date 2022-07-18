import Stories from './Stories'
import Posts from './Posts'
import Aside from './Aside'
import MobileMenu from './MobileMenu'

export default function Main() {
    return(
       <>
            <main>
                <div className="feed">
                    <Stories />
                    <Posts />
                </div>
                <Aside />
                <MobileMenu />
            </main>
        </>
    )
}

