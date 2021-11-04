type MyHandler = (error: string) => void;

const listeners: Record<string, MyHandler> = {};

function myAddEventListener<K extends string>(
    eventType: K,
    cb: MyHandler,
) {
    listeners[eventType] = cb;
}


myAddEventListener('gjgj', () => {})