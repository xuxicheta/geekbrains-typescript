export function renderBlock (elementId: string, html: string): void {
  const element = document.getElementById(elementId)
  if (element != null) {
    element.innerHTML = html
  }
}

export interface RenderMessage {
  text: string;
  type: string;
}

export interface RenderAction {
  handler: () => void;
  name: string;
}


export function renderToast (message?: RenderMessage, action?: RenderAction): void {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast()
    }
  }
}
