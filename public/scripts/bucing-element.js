import localdata from './getDataLocalstorage.js';
import { renderUserBlock } from './user.js';
export default () => {
    const like = document.querySelectorAll('.favorites');
    let favoritesItems = [];
    like.forEach((el) => {
        const btn = document.getElementById(el.id);
        localdata().userFavoriteItemsAmount.forEach(element => {
            if (Number(el.id) === element) {
                btn.classList.add('active');
            }
        });
        el.addEventListener('click', (event) => {
            const btn = document.getElementById(event.target.id);
            btn.classList.toggle('active');
            if (btn.classList[1] === 'active') {
                favoritesItems = localdata().userFavoriteItemsAmount;
                favoritesItems.push(Number(event.target.id));
                localStorage.setItem('userFavoriteItemsAmount', JSON.stringify(favoritesItems));
                const localStorageUpdate = localdata();
                renderUserBlock(localStorageUpdate.userName, localStorageUpdate.userAvatar, localStorageUpdate.userFavoriteItemsAmount);
            }
            else {
                favoritesItems.forEach((fi, idx) => {
                    if (fi === +event.target.id) {
                        favoritesItems.splice(idx, 1);
                    }
                });
                localStorage.setItem('userFavoriteItemsAmount', JSON.stringify(favoritesItems));
                const localStorageUpdate = localdata();
                renderUserBlock(localStorageUpdate.userName, localStorageUpdate.userAvatar, localStorageUpdate.userFavoriteItemsAmount);
            }
        });
    });
};
