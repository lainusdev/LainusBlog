fetch('posts/posts.json')
  .then(response => response.json())
  .then(posts => {
    const slug = new URLSearchParams(window.location.search).get('post');
    const post = posts.find(p => p.slug === slug);
    if (post) {
      fetch(`posts/${post.slug}.md`)
        .then(r => r.text())
        .then(md => {
          const html = md
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')
            .replace(/
/g, '<br>');
          document.getElementById('post-content').innerHTML = html;
        });
    } else {
      document.getElementById('post-content').innerHTML = "<h2>Post no encontrado</h2>";
    }
  });
