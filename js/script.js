fetch('posts/posts.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('posts-list');
    data.forEach(post => {
      const div = document.createElement('div');
      div.className = 'line post';
      div.innerHTML = `<span><a class="link" href="post.html?post=${post.slug}">${post.title}</a></span><span class="date">${post.date}</span>`;
      list.appendChild(div);
    });
  });
