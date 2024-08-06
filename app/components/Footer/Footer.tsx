import { plus_jakarta_sans, work_sans } from '@/app/assets/fonts/fonts';
import '../Footer/footer.css'
import Image from 'next/image';
import mailIcon from '@/public/img/footer/mail.svg';
import footerLogoIcon from '@/public/img/footer/footer-logo.svg'

export default function Footer() {
   return (
      <footer className={`${plus_jakarta_sans.className} footer`}>
         <div className="footer_container">
            <div className="footer_nav">
               <div className="about">
                  <div className="about_title">
                     <p>About</p>
                  </div>
                  <div className="about_paragraph">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  </div>
                  <div className="about_contacts">
                     <p>
                        <span style={{color: '#181A2A', fontWeight: '600', marginRight: '4px'}}>Email:</span>
                        info@jstemplate.net
                     </p>
                     <p>
                        <span style={{color: '#181A2A', fontWeight: '600', marginRight: '4px'}}>Phone:</span>
                        880 123 456 789
                     </p>
                  </div>
               </div>
               <div className="footer_links">
                  <div className="footer-links_column">
                     <div className="column_header">
                        <p>Quick link</p>
                     </div>
                     <div className="column-links">
                        <p>Home</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Archived</p>
                        <p>Author</p>
                        <p>Contact</p>
                     </div>
                  </div>
                  <div className="footer-links_column">
                     <div className="column_header">
                        <p>Category</p>
                     </div>
                     <div className="column-links">
                        <p>Lifestyle</p>
                        <p>Technology</p>
                        <p>Travel</p>
                        <p>Business</p>
                        <p>Economy</p>
                        <p>Sports</p>
                     </div>
                  </div>
               </div>
               <div className={`${work_sans.className} email-form_panel`}>
                  <div className="email-form-panel_header">
                     <h1 style={{
                        fontWeight: '600',
                        fontSize: '1.25rem',
                        color: '#181A2A',
                     }}>
                        Weekly Newsletter</h1>
                     <p style={{
                        fontWeight: '400',
                        fontSize: '1rem',
                        color: '#696A75',
                     }}
                     >
                        Get blog articles and offers via email
                     </p>
                  </div>
                  <div className="email-form-panel_form">
                     <input type="text" placeholder='Your Email' />
                     <Image 
                        src={mailIcon}
                        alt='mail'
                        width={20}
                        height={20}
                        className='mail-icon'
                     />
                  </div>
               </div>
            </div>
            <div className="footer_copyright">
               <div className="copyright_logo">
                  <Image 
                     src={footerLogoIcon}
                     alt='footer logo icon'
                     width={48}
                     height={48}
                     className='copyright-logo_icon'
                  />
                  <div className="copyright-logo_text">
                     <p style={{fontSize: '1.25rem', fontWeight: '400', color: '#141624'}}>
                        Meta
                        <span style={{fontWeight: '800'}}>Blog</span>
                     </p>
                     <p style={{fontSize: '1rem', color: '#141624'}}>
                        © JS Template 2023. All Rights Reserved.
                     </p>
                  </div>
               </div>
               <div className="copyright_links">
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
               </div>
            </div>
         </div>
      </footer>
   );
}