const array: Array<number> = [1, 2];
const arrayStr: Array<string> = ['1', '2'];


type Keys = '1' | '2' | '3';

interface WithId {
    id: string;
}

interface MyObject {
    id: string;
    value: string;
}

const collectionSource: Array<MyObject> = [
    { id: '1', value: '11' },
    { id: '2', value: '22' },
    { id: '3', value: '33' },
]

class Collection<Key extends string = Keys, Value extends { id: string } = MyObject> {
    _list: Array<Value> = [];

    constructor(list: Array<Value>) {
        this._list = list;
    }

    get(key: Key): Value {
        return this._list.find(element => element.id === key);
    }
}

const collectionObject = new Collection(collectionSource);

const result = collectionObject.get('3')

interface MyObject2 {
    id: string;
    name: string;
}

const collectionSource2 = [
    { id: '1', name: '11' },
    { id: '2', name: '22' },
    { id: '3', name: '33' },
]


const collectionObject2 = new Collection<string, MyObject2>(collectionSource2);

const result2 = collectionObject2.get('2');

function get<
    Key extends string,
    Value extends { id: string }
>(
    key: Key,
    list: Array<Value>
): Value {
    return this._list.find(element => element.id === key);
}

const result3 = get<Keys, MyObject>('1', collectionSource);

interface MyData<T> {
    data: T;
}

const myData: MyData<MyObject> = {
    data: {
        id: '1',
        value: '2',
    }
}

type MyData2<T> = {
    data: T;
}

type TData = MyData<MyObject>;



const response = Promise.resolve<null>(null);



function request<TRespose>(): Promise<TRespose> {
    return fetch('dfdfsdfsdf')
        .then<TRespose>(r => r.json());
}


type TData1 = Record<string, MyObject>;

interface MyBody {
    a?: number;
    b: number;
    c: number;
    d: number;
}

const body: Partial<MyBody> = {
    a: 1,
    c: 2,
}


const body2: Required<MyBody> = {
    a: 1000,
    b: 4,
    c: 2,
    d: 77,
}

const bodyPick: Pick<MyBody, 'a'|'b'> = {
    b: 1,
    a: 100,
}


const bodyOmit: Omit<MyBody, 'a'|'b'> = {
    c: 1000,
    d: 100,
}


const bodyReadonly: Readonly<MyBody> = {
    a: 1,
    b: 80,
    c: 2,
    d: 100,
}


