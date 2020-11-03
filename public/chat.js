// let message = document.getElementById("message");
// let username = document.getElementById("username");

// let output = document.getElementById("output");
// let actions = document.getElementById("actions");

// btn.addEventListener('click', () => {
// socket.emit("chat:message", { //voy a emitir un objeto con el nombre entre ''
//     username: username.value,
//     message: message.value,
// });
//     console.log('hola');
// });


// // message.addEventListener('keypress', ()=>{
// // 	socket.emit('chat.typing', username.value);
// // })

// socket.on('chat:message', function(data){
// 	actions.innerHTML = '';
// 	if(data.username == username.value){
// 		output.innerHTML += `<p style="text-align: right; background:#eeea">
// 			${data.message}
// 		</p>`
// 	} else {
// 		output.innerHTML += `<p style="background:rgba(47, 255, 116, 0.3)">
// 			<strong>${data.username}</strong>: ${data.message}
// 		</p>`
// 	}
// 	message.value = '';
// });

// socket.on('chat:tuping', function(data){
// 	actions.innerHTML = `<p style="padding:0;margin:0;"><en>${data} esta escribiendo...</en></p>`
// });

// let chatWindow = document.querySelector(".chat-window");
