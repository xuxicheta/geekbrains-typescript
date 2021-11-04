import { renderBlock } from './lib.js';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxRQUFnQixFQUFFLFNBQWlCLEVBQUUsbUJBQTJCO0lBQy9GLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CO1FBQzFDLENBQUMsQ0FBQyxjQUFjLG1CQUFtQixFQUFFO1FBQ3JDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFFakIsTUFBTSxTQUFTLEdBQUcsbUJBQW1CO1FBQ25DLENBQUMsQ0FBQyxjQUFjO1FBQ2hCLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFFaEIsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFNBQVMsVUFBVSxRQUFROzs0QkFFaEMsUUFBUTs7d0JBRVosU0FBUyxTQUFTLGdCQUFnQjs7OztLQUlyRCxDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayAodXNlck5hbWU6IHN0cmluZywgYXZhdGFyU3JjOiBzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gZmF2b3JpdGVJdGVtc0Ftb3VudCBcbiAgICA/IGDQmNC30LHRgNCw0L3QvdGL0YU6ICR7ZmF2b3JpdGVJdGVtc0Ftb3VudH1gXG4gICAgOiAn0L3QuNGH0LXQs9C+INC90LXRgic7XG5cbiAgY29uc3QgaGVhcnRJY29uID0gZmF2b3JpdGVJdGVtc0Ftb3VudCBcbiAgICA/ICdoZWFydC1maWxsZWQnIFxuICAgIDogJ2hlYXJ0LXJlZCc7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7YXZhdGFyU3JjfVwiIGFsdD1cIiR7dXNlck5hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiJHtoZWFydEljb259XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cbiJdfQ==
