// import React from 'react';
// import { Avatar } from '@mui/material';
// import './chat.css';
// import { Link } from 'react-router-dom';

// function Chat({ name, message, profilePic, timestamp }) {
//   return (
//       //need to fix this to route to their name link to=`chat/chat/${name}`
//       <Link to={`/chatscreen`}>
//     <div className='chat'>
//         <Avatar className='chat-img' alt={name} src={profilePic} />
//         <div className='chat-details'>
//             <h2>{name}</h2>
//             <p>{message}</p>
//         </div>
//         <p className='chat-time'>{timestamp}</p>
//     </div>
//     </Link>
//   );
// }

// export default Chat

import React, { useState} from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
// import DirectChatPage from "../Chat/DirectChatPage"

function Chat() {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}
	return (
    <div>
<ChatEngine
			height='100vh'
			userName={'plaindemon'}
			userSecret={'password'}
			projectID={'72949073-ce1d-4d81-af1a-b652aaff46e0'}
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
    {/* <DirectChatPage /> */}
    </div>
		
	);
}
 export default Chat;