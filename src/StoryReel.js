import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_200,q_80,w_200/buk9g8mzvldvm8urw3ep.jpg'
        profileSrc='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_200,q_80,w_200/buk9g8mzvldvm8urw3ep.jpg'
        title='Mane 1'
      />
      <Story 
        image='https://secure.gravatar.com/avatar/9f4451afa3ce4be72f4ec8227bd8d320?s=400&d=mm&r=g'
        profileSrc='https://secure.gravatar.com/avatar/9f4451afa3ce4be72f4ec8227bd8d320?s=400&d=mm&r=g'
        title='Mane 2'
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fsbTg7wBKVjunmYU0rYxVAmJKIkvY0Chkw&usqp=CAU'
        profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fsbTg7wBKVjunmYU0rYxVAmJKIkvY0Chkw&usqp=CAU'
        title='Mane 3'
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST_Eoolk3c6J7LxNww6QpBkvBsqqphxkAD3g&usqp=CAU'
        profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST_Eoolk3c6J7LxNww6QpBkvBsqqphxkAD3g&usqp=CAU'
        title='Mane 4'
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH1StY7B1QWFhlzRr4sWAZojEmzHHoka_rgg&usqp=CAU'
        profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH1StY7B1QWFhlzRr4sWAZojEmzHHoka_rgg&usqp=CAU'
        title='Mane 5'
      />
      <Story
        image='https://pbs.twimg.com/media/DaooCaEU0AAdMFJ.jpg'
        profileSrc='https://pbs.twimg.com/media/DaooCaEU0AAdMFJ.jpg'
        title='Mane 6'
      />
    </div>
  )
}

export default StoryReel
