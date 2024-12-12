import React from 'react'

const Card = () => {
  return (
    <div className='maindiv'>
        <div className='div1'>
            <h1>MERLYN</h1>
            </div>      
           
            <div className='div2'>
                <img src='images.jpg' alt='no img' />
                <p>The profile card is also sometimes referred to as a contact card or people card. Here's an example of the card in Outlook on the web: The profile card may look different depending on which app you're in. You can select a section title on the card</p>
           <span>Followers</span>     
           <span>Following</span>
           <span>Post</span><br></br> <br></br>
            <button>Follow</button>
            <button>Message</button>
          </div>
    </div>
  )
}

export default Card
