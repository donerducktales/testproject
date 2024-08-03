import Image from 'next/image';
import './singlepost.css';
import userIcon from '@/public/img/singlepost/user-icon.png'
import beautifulBuilding from '@/public/img/singlepost/beautiful-building.png'

export default function SinglePost() {
   return (
      <main className="main">
         <section className="blog-info_section">
            <div className="blog-info-section_container">
               <div className="blog-info_topic">
                  <p>Technology</p>
               </div>
               <h1 className="blog-info_header">
                  The Impact of Technology on the Workplace: How Technology is Changing
               </h1>
               <div className="blog-info_user">
                  <div className="blog-info-user_image">
                     <Image 
                        src={userIcon}
                        alt='user icon'
                        width={28}
                        height={28}
                     />
                  </div>
                  <div className="blog-info-user_data">
                     <p style={{fontWeight: '500'}}>Tracey Wilson</p>
                     <p style={{fontWeight: '400'}}>August 20, 2022</p>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}