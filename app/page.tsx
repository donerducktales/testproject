import Post from './components/Post/Post';
import './home.css';
import { postdata } from './shared/postdata';

export default function Home() {
   return (
      <main className="main">
         <section className="page-title_section">
            <h1>Page title</h1>
            <div className="page-title_links">
               <p>Home</p>
               <p>Link One</p>
            </div>
         </section>
         <section className="posts_section">
            <div className="posts">
               {postdata.map(elem => 
                  <Post key={elem.id} imgLink={elem.imgLink} title={elem.title} postType={elem.postType} />
               )}
            </div>
         </section>
      </main>
   );
}
