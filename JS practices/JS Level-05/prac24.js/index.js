// API Fetch & Load JSON Small Practice-01

let loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

document.getElementById('btn').addEventListener('click', loadPost);

let displayPost = (postData) => {

    let postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    

    postData.forEach((post) => {
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div class="card">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
    `
    postContainer.appendChild(newDiv);
    });
}

