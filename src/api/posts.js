const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    { id: 1, title: 'react', description: '리액트 배우기' },
    { id: 2, title: 'redux', description: '리덕스 배우기' },
    { id: 3, title: 'javascript', description: '자바스크립트 배우기' }
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id);
};