interface Data {
   id: number,
   postType: string,
   imgLink: string,
   title: string,
}

export const postdata: Data[] = [ // дані для компонента Post
   {
      id: 0,
      postType: 'technology',
      imgLink: '/img/post/post-photo1.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
   },
   {
      id: 1,
      postType: 'fashion',
      imgLink: '/img/post/post-photo2.png',
      title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur'
   },
   {
      id: 2,
      postType: 'nature',
      imgLink: '/img/post/post-photo3.png',
      title: 'Duis tempus ex ac quam lacinia eleifend et at ligula. Nam nec'
   },
   {
      id: 3,
      postType: 'lorem',
      imgLink: '/img/post/post-photo4.png',
      title: 'Aliquam in ante tellus. Donec a lacus porta, tempor enim ac, vulputate.'
   },
   {
      id: 4,
      postType: 'religion',
      imgLink: '/img/post/post-photo5.png',
      title: 'Morbi purus sem, luctus ac purus id, vestibulum feugiat urna. Sed pretium.'
   },
   {
      id: 5,
      postType: 'ipsum',
      imgLink: '/img/post/post-photo6.png',
      title: 'Pellentesque auctor eu nulla vel sollicitudin. Morbi fringilla'
   },
   {
      id: 6,
      postType: 'technology',
      imgLink: '/img/post/post-photo7.png',
      title: 'Sed eu justo vel tellus euismod faucibus in.'
   },
   {
      id: 7,
      postType: 'technology',
      imgLink: '/img/post/post-photo8.png',
      title: 'Nunc quis mi pharetra, maximus augue a, gravida arcu.'
   },
   {
      id: 8,
      postType: 'something',
      imgLink: '/img/post/post-photo9.png',
      title: 'Nulla facilisi. Suspendisse ex turpis.'
   },
]