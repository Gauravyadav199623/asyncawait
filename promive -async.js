let posts = [];
let lastActivityTime;

async function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

async function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

async function deletePost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}

async function executeAsyncTasks() {
  await createPost('New post');
  await updateLastUserActivityTime();

  console.log('Posts:', posts);
  console.log('Last activity time:', lastActivityTime);

  await deletePost();

  console.log('Posts after deletion:', posts);
}

executeAsyncTasks();
