import Image from 'next/image';
import './singlepost.css';
import userIcon from '@/public/img/singlepost/user-icon.png';
import beautifulBuilding from '@/public/img/singlepost/beautiful-building.png';
import humanWithSuitcase from '@/public/img/singlepost/human-with-suitcase.png';
import { source_serif_pro, work_sans } from '../assets/fonts/fonts';
import Quote from '../components/Quote/Quote';
import Advertisement from '../components/Advertisement/Advertisement';

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
            <div className={`${work_sans.className} paragraph_header`}>
               <h1>Research Your Destination</h1>
            </div>
            <div className="paragraph_text-block">
               <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
            </div>
            <div className={`${work_sans.className} paragraph_header`}>
               <h1>Plan Your Itinerary</h1>
            </div>
            <div className="paragraph_text-block">
               <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
               <p>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
            </div>
            <Quote quoteText={`“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”`}/>
            <div className="blog-info_image2">
               <Image 
                  src={humanWithSuitcase}
                  alt='human with suitcase'
                  fill
               />
            </div>
            <Advertisement background='#E8E8EA'/>
            <div 
               className={`${work_sans.className} paragraph_header`}
            >
               <h1 style={{
                  marginTop: '32px'
               }}>Pack Lightly and Smartly</h1>
            </div>
            <div className="paragraph_text-block">
               <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
            </div>
            <div className={`${work_sans.className} paragraph_header`}>
               <h1>Stay Safe and Healthy</h1>
            </div>
            <div className="paragraph_text-block">
               <p>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
            </div>
            <div className={`${work_sans.className} paragraph_header`}>
               <h1>Immerse Yourself in the Local Culture</h1>
            </div>
            <div className="paragraph_text-block">
               <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
            </div>
            <div className={`${work_sans.className} paragraph_header`}>
               <h1>Capture Memories</h1>
            </div>
            <div className="paragraph_text-block">
               <p>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
            </div>
            <div className={`${work_sans.className} paragraph_header`}>
               <h1>Conclusion:</h1>
            </div>
            <div className="paragraph_text-block">
               <p>Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
            </div>
         </section>
      </main>
   );
}