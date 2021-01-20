class Twitter {
  constructor({ listItem }) {
    this.tweets = new Posts({});
    this.elements = {
      listItem: document.querySelector(listItem),
    };
  }

  renderPosts() {}

  showUserPost() {}

  showLikesPost() {}

  showAllPosts() {}

  openModal() {}
}

class Posts {
  constructor(params) {
    const { posts = [] } = params;
    this.posts = posts;
  }

  addPost(tweet) {
    this.posts.push(new Post(tweet));
  }

  deletePost() {

  }

  likePost() {

  }
}

class Post {
  constructor(params) {
    const { id, userName, nickname, date, text, likes } = params;
    this.id = id;
    this.userName = userName;
    this.nickname = nickname;
    this.date = date;
    this.text = text;
    this.likes = likes;
    this.liked = false;
  }

  changeLike() {
    this.liked = !this.liked;
    if (this.liked) {
      this.likes++;
    }
    this.likes--;
  }
}

const twitter = new Twitter({
  listItem: '.tweet-list'
});

twitter.tweets.addPost({
  id: 'id',
  userName: 'userName',
  nickname: 'nickname',
  date: 'date',
  text: 'text',
  likes: 'likes',
  liked: 'false'
});
