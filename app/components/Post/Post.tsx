import Image from 'next/image';
import '../Post/post.css';

interface PostProps {
   postType: string,
   title: string,
   // imgLink: string,
}

export default function Post({title, postType}: PostProps) {
   return (
      <div className="post">
         <div className="post_cover">
            fffff
         </div>
         <div className="post_type">
            <p>{postType}</p>
         </div>
         <div className="post_title">
            <p>{title}</p>
         </div>
         <div className="post_author">
            <div className="author-avatar">

            </div>
            <div className="author-name">
               <p>Name Lastname</p>
            </div>
            <div className="author-date">
               <p>01 August, 2024</p>
            </div>
         </div>
      </div>
   );
}