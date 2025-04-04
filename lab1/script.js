document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("comment-form");
    const container = document.getElementById("commentsContainer");
  
    // Витягування збережених коментарів або створення нового масиву
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
  
    // Функція відображення коментарів
    function renderComments() {
      container.innerHTML = "";
  
      for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        const commentHTML = `
          <div class="comment">
            <img src="img/avatar1.jpg" alt="Аватар" class="avatar">
            <div class="comment-content">
              <h3>${comment.name}</h3>
              <p>${comment.text}</p>
              <span class="date">${comment.date}</span>
            </div>
          </div>
        `;
        container.innerHTML = commentHTML + container.innerHTML;
      }
    }
  
    // Обробник події форми
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById("name");
      const commentInput = document.getElementById("comment");
  
      const name = nameInput.value.trim();
      const text = commentInput.value.trim();
  
      if (name && text) {
        const date = new Date().toLocaleDateString("uk-UA", {
          day: "numeric", month: "long", year: "numeric"
        });
  
        comments.push({ name, text, date });
        localStorage.setItem("comments", JSON.stringify(comments));
  
        renderComments();
        form.reset();
      }
    });
  
    renderComments(); // Виводимо при завантаженні
  });