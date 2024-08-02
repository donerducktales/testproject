import Image from 'next/image';
import '../Post/post.css';

interface PostProps {
   postType: string,
   title: string,
   imgLink: string,
   avatar: string,
   name: string
}

export default function Post({title, postType, imgLink, avatar, name}: PostProps) {
   return (
      <div className="post">
         <div className="post_cover">
            <Image 
               src={imgLink}
               alt='post cover'
               width={360}
               height={240}
               priority
            />
         </div>
         <div className="post_type">
            <p>{postType}</p>
         </div>
         <div className="post_title">
            <p>{title}</p>
         </div>
         <div className="post_author">
            <div className="author-avatar">
               <Image 
                  src={avatar}
                  alt='avatar'
                  width={36}
                  height={36}
               />
            </div>
            <div className="author-name">
               <p>{name}</p>
            </div>
            <div className="author-date">
               <p>01 August, 2024</p>
            </div>
         </div>
      </div>
   );
}