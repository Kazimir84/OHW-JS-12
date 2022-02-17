// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        let container = document.createElement('DIV');
        let ol = document.createElement('OL');

        document.body.append(container);
        container.append(ol);

        for (let post of response) {
            let li = document.createElement('LI');
            ol.append(li);
            let divPost = document.createElement('DIV');
            divPost.className = 'post';
            divPost.innerHTML = `<p><b>User ID:</b> ${post.userId}</p> 
                                 <p><b>ID:</b> ${post.id}</p> 
                                 <p><b>Title:</b> ${post.title}</p> 
                                 <p><b>Body:</b> ${post.body}</p>`
            li.append(divPost);
        };
    });

//     2.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(response => {
        let divComment = document.createElement('DIV');
        document.body.append(divComment);

        for (let responseElement of response) {
            let divSettings = document.createElement('DIV');
            divSettings.className = 'comments';
            divSettings.style = `
                                display: flex;
                                border: 1px dotted blue;
                                border-radius: 25px;
                                `
            divSettings.innerHTML = `
                                   <p>Post Id: <br>${responseElement.postId}</br></p>
                                   <p>Id: <br>${responseElement.id}</br></p>
                                   <p>Name: <br>${responseElement.name}</br></p>
                                   <p>Email: <br>${responseElement.email}</br></p>
                                   <p>Body: <br>${responseElement.body}</br></p>
                                    `
            divComment.append(divSettings);
        };
    });
