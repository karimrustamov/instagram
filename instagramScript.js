let posts = [
    {
        'author': 'Max Mustermann',
        'image': './instagramImg/IGimg1.jpg',
        'location': 'Berlin, Germany',
        'description': 'UwU'
    },
    {
        'author': 'Anna Musterfrau',
        'image': './instagramImg/IGimg2.jpg',
        'location': 'München, Germany',
        'description': 'Der Wahnsinn!'
    },
    {
        'author': 'Murat Musterfa',
        'image': './instagramImg/IGimg3.jpg',
        'location': 'Hamburg, Germany',
        'description': 'War schön, vor allem die Shishabar!'
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
                    <img src="./instagramImg/anonym.png" alt="anonym">
                    <div class="profileAboveImg">   
                        <div class="author" >${post['author']}</div>
                        <div class="location" >${post['location']}</div>
                    </div>                
                </div>
                    <img id="dots" src="./instagramImg/dots.png" alt="dots">
            </div>
            <img class="img" src="${post['image']}">
            <div class="postText">
                <div class="author" >${post['author']}</div>
                <div class="description" >${post['description']}</div>
            </div>
            <div class="postArea">
                <textarea name="" id="comment" cols="30" rows="10" placeholder="Kommentar hinzufügen..."></textarea>
                <button>Posten</button>
            </div>

        </div>
        `
    }
}