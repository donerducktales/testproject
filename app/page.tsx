import Image from 'next/image';
import Post from './components/Post/Post';
import './home.css';
import { postdata } from './shared/postdata';
import postCardCover from '@/public/img/postCard/post-card-cover.png';
import { work_sans } from './assets/fonts/fonts';
import Advertisement from './components/Advertisement/Advertisement';
import userIconLight from '@/public/img/postCard/user-icon-light.png'

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
         <section className="post-card_section">
            <div className="post-card-section_cover">
               <Image 
                  src={postCardCover}
                  alt='post card cover'
                  fill
                  style={{
                     objectFit: 'cover',
                     borderRadius: '6px'
                  }}
                  sizes='100vw'
                  quality={100}
               />
            </div>
            <div className="post-card_info">
               <div className="post-card-info_topic">
                  <p>Technology</p>
               </div>
               <h1 className="post-card-info_header">
                  The Impact of Technology on the Workplace: How Technology is Changing
               </h1>
               <div className="post-card-info_user">
                  <div className="post-card-info-user_image">
                     <Image 
                        src={userIconLight}
                        alt='user icon light'
                        width={36}
                        height={36}
                     />
                  </div>
                  <div className="post-card-info-user_data">
                     <p style={{fontWeight: '500'}}>Tracey Wilson</p>
                     <p style={{fontWeight: '400'}}>August 20, 2022</p>
                  </div>
               </div>
            </div>
         </section>
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
