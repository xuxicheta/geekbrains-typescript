import { renderBlock } from './lib.js';
export class User {
    constructor(username, avatarSrc, favoritesAmount) {
        this.username = username;
        this.avatarSrc = avatarSrc;
        this.favoritesAmount = favoritesAmount;
    }
}
export function getUserData() {
    const rawData = localStorage.get("user");
    let data;
    if (rawData) {
        data = JSON.parse(rawData);
    }
    if (typeof data === "object" &&
        "username" in data &&
        "avatarSrc" in data) {
        return data;
    }
    return null;
}
export function getFavoritesAmount() {
    const rawData = localStorage.get('favoritesAmount');
    if (rawData != null) {
        return parseInt(rawData);
    }
    return null;
}
export function renderUserBlock(userName, avatarSrc, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount < 1
        ? `Избранных: ${favoriteItemsAmount}`
        : 'ничего нет';
    const heartIcon = favoriteItemsAmount < 1
        ? 'heart-filled'
        : 'heart-red';
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatarSrc}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="${heartIcon}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxPQUFPLElBQUk7SUFLZixZQUFhLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxlQUF1QjtRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQTtJQUN4QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN6QixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLElBQUksSUFBYSxDQUFDO0lBQ2xCLElBQUksT0FBTyxFQUFFO1FBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUI7SUFDRCxJQUNFLE9BQU8sSUFBSSxLQUFLLFFBQVE7UUFDeEIsVUFBVSxJQUFJLElBQUk7UUFDbEIsV0FBVyxJQUFJLElBQUksRUFDbkI7UUFDQSxPQUFPLElBQVksQ0FBQztLQUNyQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjtJQUNELE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLG1CQUE0QjtJQUNoRyxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixHQUFHLENBQUM7UUFDOUMsQ0FBQyxDQUFDLGNBQWMsbUJBQW1CLEVBQUU7UUFDckMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUVqQixNQUFNLFNBQVMsR0FBRyxtQkFBbUIsR0FBRyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxjQUFjO1FBQ2hCLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFFaEIsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFNBQVMsVUFBVSxRQUFROzs0QkFFaEMsUUFBUTs7d0JBRVosU0FBUyxTQUFTLGdCQUFnQjs7OztLQUlyRCxDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIGF2YXRhclNyYzogc3RyaW5nXG4gIGZhdm9yaXRlc0Ftb3VudDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IgKHVzZXJuYW1lOiBzdHJpbmcsIGF2YXRhclNyYzogc3RyaW5nLCBmYXZvcml0ZXNBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZVxuICAgIHRoaXMuYXZhdGFyU3JjID0gYXZhdGFyU3JjXG4gICAgdGhpcy5mYXZvcml0ZXNBbW91bnQgPSBmYXZvcml0ZXNBbW91bnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckRhdGEoKTogVXNlciB8IG51bGwge1xuICBjb25zdCByYXdEYXRhID0gbG9jYWxTdG9yYWdlLmdldChcInVzZXJcIik7XG4gIGxldCBkYXRhOiB1bmtub3duO1xuICBpZiAocmF3RGF0YSkge1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKHJhd0RhdGEpO1xuICB9XG4gIGlmIChcbiAgICB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJlxuICAgIFwidXNlcm5hbWVcIiBpbiBkYXRhICYmXG4gICAgXCJhdmF0YXJTcmNcIiBpbiBkYXRhXG4gICkge1xuICAgIHJldHVybiBkYXRhIGFzIFVzZXI7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59ICBcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlc0Ftb3VudCgpOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgcmF3RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXQoJ2Zhdm9yaXRlc0Ftb3VudCcpO1xuICBpZiAocmF3RGF0YSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHJhd0RhdGEpO1xuICB9XG4gIHJldHVybiBudWxsXG59ICBcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayAodXNlck5hbWU6IHN0cmluZywgYXZhdGFyU3JjOiBzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPCAxXG4gICAgPyBg0JjQt9Cx0YDQsNC90L3Ri9GFOiAke2Zhdm9yaXRlSXRlbXNBbW91bnR9YFxuICAgIDogJ9C90LjRh9C10LPQviDQvdC10YInO1xuXG4gIGNvbnN0IGhlYXJ0SWNvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPCAxXG4gICAgPyAnaGVhcnQtZmlsbGVkJyBcbiAgICA6ICdoZWFydC1yZWQnO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke2F2YXRhclNyY31cIiBhbHQ9XCIke3VzZXJOYW1lfVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlck5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIiR7aGVhcnRJY29ufVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=