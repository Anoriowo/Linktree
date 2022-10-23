import React from 'react'

const Linktree = () => {
  return (
 <div className='the_body'>
    <div>
      <img src='./profil.jpg' alt='' id='profile_img'/>
      <h3 id='twitter'>Oriowo Anuoluwapo</h3>
      <h3 id='slack'>Anuoluwapo</h3>
    </div>
    <div className='btns'>
      <a className='single_btns' href='https://twitter.com/anoriowo' id='' target='blank'>Twitter Link</a>
      <a className='single_btns' href='https://training.zuri.team/' id='btn_zuri' target='blank' >Zuri Team</a>
      <a className='single_btns' href='https://books.zuri.team' id='books' target='blank'>Zuri Books</a>
      <a className='single_btns' href='https://books.zuri.team/python-for-beginners?ref_id=<anuoluwapo>' id='book_python' target='blank'>Python Books</a>
      <a className='single_btns' href='https://background.zuri.team' id='pitch' target='blank'>Background Check for Coders</a>
      <a className='single_btns' href='https://books.zuri.team/design-rules' id='book_design' target='blank'>Design Books</a>
    </div>

    <hr/>
    HNG Internship 9 Frontend Task
 </div>

  )
}

export default Linktree
