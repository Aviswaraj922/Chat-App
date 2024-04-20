import {useEffect,useRef} from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeletons';

const Messages = () => {
  const{messages,loading}=useGetMessages();
  console.log("messages:",messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(
        <Message key={message._id} message={message}/>
      ))}


   {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
    {!loading && messages.length===0 && (
      <p className='text-center'>Send A Message to start the Conversation</p>
    )}

    </div>
  );
};

export default Messages;










// import React from 'react'
// import Message from './Message';

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>


//     </div>
//   )
// }

// export default Messages;
