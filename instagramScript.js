let posts = [
    {
        'author': 'Max Mustermann',
        'image': './instagramImg/IGimg1.jpg',
        'location': 'Berlin, Germany',
        'description': 'Quality time',
        'comments': ['Cool!'],
        'users': ['Momo'],
        'timestamps': ['11.9.2023 14:21']
    },
    {
        'author': 'Anna Musterfrau',
        'image': './instagramImg/IGimg2.jpg',
        'location': 'München, Germany',
        'description': 'Der Wahnsinn!',
        'comments': [],
        'users': [],
        'timestamps': []
    },
    {
        'author': 'Murat Musterfa',
        'image': './instagramImg/IGimg3.jpg',
        'location': 'Hamburg, Germany',
        'description': 'War schön, vor allem die Shishabar!',
        'comments': [],
        'users': [],
        'timestamps': []
    }
];


function render() {
    document.getElementById('postContainer').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postContainer').innerHTML += `
        <div class="post">
            <div class="aboveImg">
                <div class="aboveImgLeft">
                    <a href="#"><img src="./instagramImg/anonym.png" alt="anonym"></a>
                    <div class="profileAboveImg">   
                    <a href="#"><div class="author" >${post['author']}</div></a>
                    <a href="#"><div class="location" >${post['location']}</div></a>
                    </div>                
                </div>
                    <a href="#"><img id="dots" src="./instagramImg/dots.png" alt="dots"></a>
            </div>
            <img class="img" src="${post['image']}">
            <div class="postText">
                <a href="#"><div class="author" >${post['author']}</div></a>
                <div class="description" >${post['description']}</div>
                <div class="allComments" id="allComments${i}"></div>
            </div>
            <div class="postArea">
                <input class="user" id="user${i}" type="text" placeholder="Name..." required>
                <textarea name="" class="comment" id="comment${i}" cols="30" rows="10" placeholder="Kommentar..." required></textarea>
                <button onclick="addComment(${i})">Posten</button>
            </div>

        </div>
        `

        let commentContent = document.getElementById(`allComments${i}`);
        
        for (let j = 0; j < post['comments'].length; j++) {
            const comment = post['comments'][j];
            const user = post['users'][j];
            const timestamp = post['timestamps'][j];

            commentContent.innerHTML += `<div class="OneComment"> <div class="UserWithComment"><b>${user}</b>: ${comment}</div> <div class="date">${timestamp}</div></div>`;
        }
    }
}

function addComment(index) {
    let input = document.getElementById(`comment${index}`);
    let userName = document.getElementById(`user${index}`);

    if(input.value.trim() === '' || userName.value.trim() === '') {
        alert('Beide Felder sind erforderlich.');
        return;
    }

    let currentDate = new Date();
    let formattedDate = `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    

    posts[index]['comments'].push(input.value);
    posts[index]['users'].push(userName.value);
    posts[index]['timestamps'].push(formattedDate);


    render();
    input.value = '';
    userName.value = '';
}