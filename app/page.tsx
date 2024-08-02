// import Image from 'next/image';
import Post from './components/Post/Post';
import './home.css';
import { postdata } from './shared/postdata';
// import postCardCover from '@/public/img/postCard/post-card-cover.png';
import { work_sans } from './assets/fonts/fonts';
import Advertisement from './components/Advertisement/Advertisement';

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
         {/* <section className="post-card_section">
            <Image 
               src={postCardCover}
               alt='post card cover'
               width={1214}
               height={450}
            />
         </section> */}
         <section className="posts_section">
            <div className="posts">
               {postdata.map(elem => 
                  <Post 
                     key={elem.id} 
                     imgLink={elem.imgLink} 
                     postType={elem.postType} 
                     title={elem.title} 
                     avatar={elem.avatar}
                     name={elem.name}
                  />
               )}
            </div>
            <button className={`${work_sans.className} load-more_button`}>
               Load More
            </button>
         </section>
         <Advertisement background='#E8E8EA'/>
      </main>
   );
}
