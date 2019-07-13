const initState = {
    posts: [
        {id: '1', title: 'TITLE repudiandae veniam quaerat sunt sed 1', body: 'BODY repudiandae veniam quaerat sunt sed 1'},
        {id: '2', title: 'TITLE repudiandae veniam quaerat sunt sed 3', body: 'BODY repudiandae veniam quaerat sunt sed 2'},
        {id: '3', title: 'TITLE repudiandae veniam quaerat sunt sed 3', body: 'BODY repudiandae veniam quaerat sunt sed 3'}
    ]
}
const rootReduces = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReduces;