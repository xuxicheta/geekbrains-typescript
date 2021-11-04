import { renderBlock } from './lib.js'

export function renderUserBlock (userName: string, avatarSrc: string, favoriteItemsAmount: number): void {
  const favoritesCaption = favoriteItemsAmount < 1
    ? `Избранных: ${favoriteItemsAmount}`
    : 'ничего нет';

  const heartIcon = favoriteItemsAmount < 1
    ? 'heart-filled' 
    : 'heart-red';

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarSrc}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="${heartIcon}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
