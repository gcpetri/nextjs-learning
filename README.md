# NextJS Learning

## The Language

## Javascript (JS)

- Single-Threaded (Main Thread vs Service Workers)
- Dynamic (types assigned based on value at runtime)

Variable Declarations
- Declares the scope

```js
const // static
let // can be reassigned
var // very leniant !!! BAD !!!
```

Exercise 1
```java
// write these Java lines in Javascript
// 1
System.out.println("Hello World");
// 2
String str = "Hello World";
// 3
List<Integer> lst = List.of(1, 2, 3, 4);
lst.add(5);
// 4
Map<String, Integer> map = new HashMap();
map.put("one", 1);
map.put("two", 2);
map.put("three", 3);
```

## Typescript (TS)

- just JS but with predefined types

Common Types
```ts
string
number
string[]
number[]
object
null
undefined
any
```

Custom Type
```ts
type CustomResponse = {
    status: number,
    response?: string,
}
// or
interface CustomResponse {
    status: number,
    response?: string
}

// usage
const res: CustomResponse = getResponse();
console.log(res.status);
console.log(res.response);
```

Exercise 2
```java
// write the same lines in Typescript
// 1
System.out.println("Hello World");
// 2
String str = "Hello World";
// 3
List<Integer> lst = List.of(1, 2, 3, 4);
lst.add(5);
// 4
Map<String, Integer> map = new HashMap();
map.put("one", 1);
map.put("two", 2);
map.put("three", 3);
```

## Node

"Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript."

NPM - the package Node manager (like Maven)

```bash
# ensure they are in your PATH
node --version
npm --version
```

Exercise 3
```bash
# run a typescript program with node
node node/exercise3.ts
```

Exercise 4
```bash
# make "sayHello" return a string and then print it
node node/exercise4.ts
```

## Sychronous VS Asynchronous

Remember single threaded

Promises
- first generation of asyncronous
```ts
const callFirst = () => new Promise((resolve) => {
    const str: string = "first";
    resolve(console.log(str));
});

const callSecond = () => new Promise((resolve) => {
    const str: string = "second";
    resolve(console.log(str));
});

callFirst()
    .then(() => {
        // after the first promise is resolved
        callSecond()
            .then(() => {
                // after the second promise is resolved
                console.log("done");
            })
    });

// output:
// first
// second
// done
```

Async/Await
- new generation of asynchronous (cleaner)
```ts
const callFirst = async () => {
    console.log("first");
}
const callSecond = async () => {
    console.log("second");
}
await callFirst();
await callSecond();
console.log("done");

// output:
// first
// second
// done
```

Exercise 5
```bash
# Fix "longRunningFunction" so that done comes after all the numbers
node synchronousVsAsynchronous/exercise5.ts
```

## React & NextJS Overview

React 
- flexible JavaScript library for building user interfaces
- lets you compose complex UIs from small and isolated pieces of code called “components”
- components can be "classses" or "funtions"
    - the latter is more common because of "hooks"
    - JS logic with JSX (Executable Javascript (html)) returned

```ts
export default function MyComponent(): JSX.Element {
    // logic
    const str: string = "Hello World";

    return (
        <p>{str}</p>
    )
}
```

The Power of ReactJS

The LIFECYCLE

![React LifeCyle](https://repository-images.githubusercontent.com/196048036/5fae96d6-a1e5-43bc-8556-4ab9d83d4ff2)

## (ReactJS) Hooks

- useState
    ```ts
    // initialize the state
    const [str, setStr] = useState<string>("Hello World");

    // update the state
    setStr("New String");
    ```

    Exercise 6
    ```bash
    # 1
    npm i # install dependencies
    npm run dev # run the app

    # 2
    # click the button
    # refresh the page
    # in "StateComponent"
    ```

- useEffect
    ```ts
    // initialize the state
    const [str, setStr] = useState<string>("Hello World");

    useEffect(() => {
        console.log("str updated");
    }, [str]);

    useEffect(() => {
        console.log("component mounted");

        return () => {
            console.log("component unmounted");
        }
    }, []);

    // update the state
    setStr("New String");
    ```

    Exercise 7
    ```bash
    # show "Button was Clicked" with useEffect
    # in "EffectComponent"
    npm run dev
    ```

## (NextJS) Pages

- easy routing (versus using ReactRouter)
- /pages/test => http://localhost:3000/test

Exercise 8
```bash
# create a new page called hello
# make is say Ahola!
npm run dev
# navigate to http://localhost:3000/hello
```

## (NextJS) Server Side Only

- NextJS has a client and server
    - see the /.next build directory
- `getServerSideProps`, `getStaticProps`, `getInitialProps`, `lib`, and `pages/api/*` are not compiled in the browser

## (NextJS) REST API
- can request REST API from the browser
- /pages/api/hello.ts => http://localhost:3000/api/hello
- /pages/api/hello/index.ts = /pages/api/hello
- pass parameters
    - /pages/api/hello/[message]/index.ts => http://localhost:3000/api/hello/hey

Exercise 8
```bash
# Create a new route /api/test
# should return
# {
#   data: intrepid
# }
npm run dev
```

## (ReactJS) Props

- Pass parent state downstream to child components
- Update parent state from child components

```ts
// ParentComponent.tsx
export default function ParentComponent(): JSX.Element {
    const [parentMessage, setParentMessage] = useState<string>("parent-message");

    return (
        <ChildComponent parentMessage={parentMessage} updateParentMessage={setParentMessage} />
    )
}

// ChildComponent.tsx
interface Props {
    parentMessage: string,
    updateParentMessage: (newParentMessage: string) => void
}
export default function ChildComponent({ parentMessage, updateParentMessage }: Props): JSX.Element {

    const [newMessage, setNewMessage] = useState<string>("");

    return (
        <span>{parentMessage}</span>

        <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />

        <button onClick={() => updateParentMessage(newMessage)}>
            Update the Parent Message
        </button>
    )
}
```

## (TS) Calling 3rd Party Api from Client

Two common libraries
- axios
- fetch (build-in) <- my preference

### Fetch

Google
```ts
// defaults to GET request
const response: Response = await fetch('https://google.com');
```

NextJS Server API
```ts
// make GET request
const response: Response = await fetch('http://localhost:3000/api/hello', {
    method: "GET",
    headers: {
        "Content-Type": "application/json".
        "Accept": "application/json"
    }
});

// get response body
const json: any = await response.json();
```

Exercise 9
```bash
# Putting it all together
# 1
# render "FetchComponent" in you /pages/test.tsx page

# 2
# make a fetch call to /api/hello from "getStaticProps" in "FetchComponent" and store it in "data"

# 3
# make a fetch call to /api/test when you click the button
# replace "data" with that response
```

# Further Learning

Design
- most ReactJS applications do not use plain html
- MUI: https://mui.com/
- Chakra: https://chakra-ui.com/
- Geist: https://geist-ui.dev/en-us

State Managers
- Redux: https://redux.js.org/
- Persistant Redux: https://github.com/rt2zz/redux-persist#readme

Testing
- Unit Testing: https://testing-library.com/docs/react-testing-library/intro/

## Answers

Exercise 1
```js
// 1
console.log("Hello World"); # or console.info("Hello World");
// 2
const str = "Hello World";
// 3
const lst = [1, 2, 3, 4];
lst.push(5);
// 4
const map = {
    "one": 1,
    "two": 2,
    "three": 3
};
```

Exercise 2
```ts
// 1
console.log("Hello World"); # or console.info("Hello World");
// 2
const str: string = "Hello World";
// 3
const lst: number[] = [1, 2, 3, 4];
lst.push(5);
// 4
const map: {
    [s in string]: number
} = {
    "one": 1,
    "two": 2,
    "three": 3
};
// or
type CustomMap = {
    [s in string]: number
}
const map: CustomMap = {
    "one": 1,
    "two": 2,
    "three": 3
}
// or
type CustomMap = {
  "one": number,
  "two": number,
  "three": number,
}
const map: CustomMap = {
    "one": 1,
    "two": 2,
    "three": 3
}
```

Exercise 4
```ts
const sayHello2 = () => {
    return "Hello World";
}
```

Exercise 5
```ts
const sayHello2 = () => {
    return "Hello World";
}
```