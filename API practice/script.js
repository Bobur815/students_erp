function getPost() {
    const postId=document.getElementById('postIdInput').value;

    if (!postId) {
        alert("Iltimos, post ID kiriting!");
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=>{
        if (!response.ok) {
            throw new Error("Post topilmadi!");
        }
        return response.json();
    })
    .then(data=>{
        const postDiv = document.getElementById('post');
        postDiv.innerHTML=`
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        `;
    })
    .catch(error=>{
        console.error('Xatolik:', error);
        alert("Noto'g'ri ID kiritildi yoki API ishlamayapti");
    });
}