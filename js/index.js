class FetchData {
  async getResource(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  }

  getPost() {
    return this.getResource('db/dataBase.json');
  }
}

class Twitter {
  constructor({ listItem }) {
    const fetchData = new FetchData();
    this.tweets = new Posts();
    this.elements = {
      listItem: document.querySelector(listItem),
    };

    fetchData.getPost()
      .then(data => {
        data.forEach(item => {
          this.tweets.addPost(item);
        }, twitter);
      });
  }

  renderPosts() {}

  showUserPost() {}

  showLikesPost() {}

  showAllPosts() {}

  openModal() {}
}

class Posts {
  constructor({ posts = [] } = {}) {
    this.posts = posts;
  }

  addPost(tweets) {
    this.posts.push(tweets);
  }

  deletePost(id) {
    let updatedPosts = this.posts.filter(post => {
      return post.id !== id;
    });
    this.posts = updatedPosts;
  }

  likePost() {

  }
}

class Post {
  constructor({ id, userName, nickname, postDate, text, likes = 0 }) {
    this.id = id || this.generateId();
    this.userName = userName;
    this.nickname = nickname;
    this.postDate = postDate ? new Date(postDate) : new Date();
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

  generateId() {
    return Math.random().toString(32).substring(2, 9) + (+new Date()).toString(32);
  }

  getDate() {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minutes: '2-digit',
    };

    return this.postDate.toLocaleString('en-US', options);
  }
}

const twitter = new Twitter({
  listItem: '.tweet-list'
});