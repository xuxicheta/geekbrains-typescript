import { renderBlock } from './lib.js'

export class User {
  username: string
  avatarSrc: string
  favoritesAmount: number

  constructor (username: string, avatarSrc: string, favoritesAmount: number) {
    this.username = username
    this.avatarSrc = avatarSrc
    this.favoritesAmount = favoritesAmount
  }
}

export function getUserData(): User | null {
  const rawData = localStorage['get']("user");
  let data: unknown;
  if (rawData) {
    data = JSON.parse(rawData);
  }
  if (
    typeof data === "object" &&
    data != null &&
    'username' in data &&
    'avatarSrc' in data
  ) {
    return data as User;
  }
  return null;
}  

export function getFavoritesAmount(): number | null {
  const rawData = localStorage['get']('favoritesAmount');
  if (rawData != null) {
    return parseInt(rawData);
  }
  return null
}  

export function renderUserBlock (userName: string, avatarSrc: string, favoriteItemsAmount?: number | null): void {
  // по понимаю, почему выдает ошибку, если я явно разрешила свойству быть null с помощью конструкции number | null
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
