function fetchPosts() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        resolve(posts);
      })
      .catch(reject)
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(reject);
  });
}

export default {
  fetchPosts,
  createPost
}