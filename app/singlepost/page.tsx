import Image from 'next/image';
import './singlepost.css';
import userIcon from '@/public/img/singlepost/user-icon.png'
import beautifulBuilding from '@/public/img/singlepost/beautiful-building.png'
import { source_serif_pro } from '../assets/fonts/fonts';

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
            <div className="blog-info_image">
               <Image 
                  src={beautifulBuilding}
                  alt='beautifulBuilding'
                  fill
               />
            </div>
         </section>
         <section className={`${source_serif_pro.className} paragraphs_section`}>
            <div className="paragraph_text-block">
               <p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
               <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
            </div>
         </section>
      </main>
   );
}