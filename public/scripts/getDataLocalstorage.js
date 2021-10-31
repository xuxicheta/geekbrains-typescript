export default () => {
    const name = localStorage.getItem('userName');
    const avatar = localStorage.getItem('userAvatar');
    const item = JSON.parse(localStorage.getItem('userFavoriteItemsAmount'));
    const readeData = {
        userName: name,
        userAvatar: avatar,
        userFavoriteItemsAmount: item,
    };
    return readeData;
};
