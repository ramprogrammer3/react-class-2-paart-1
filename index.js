
console.log("**************************************************");
function Home(){
    return(
      <>
        <h1>Home component </h1>
      </>
    )
  }
  function App() {
    return (
      <div>
        <h2>App Component </h2>
        <Home />
      </div>
    );
  }
console.log("********************************************************")

function Home(props){
    console.log(props)
    return(
      <>
        <h1>Home component </h1>
        <h2>greeting : {props.greeting}</h2>
      </>
    )
  }
  function App() {
    return (
      <div>
        <h2>App Component </h2>
        <Home greeting = "Have a greate day " />
      </div>
    );
  }

console.log("********************************************************")

function Home({greeting}){
    return(
      <>
        <h1>Home component </h1>
        <h2>greeting : {greeting}</h2>
      </>
    )
  }
  function App() {
    return (
      <div>
        <h2>App Component </h2>
        <Home greeting = "Have a greate day " />
      </div>
    );
  }
console.log("********************************************************")

import Home from './Home'
function App() {
  return (
    <div>
      <h2>App Component </h2>
      <Home greeting = "Have a greate day " />
    </div>
  );
}

function Home(props) {
    return (
      <>
          <h1>Home Componet: {props.greeting}</h1>
      </>
    )
  }
console.log("********************************************************")

import Home,{About} from './Home'
function App() {
  return (
    <div>
      <h2>App Component </h2>
      <Home greeting = "Have a greate day " />
      <About />
    </div>
  );
}

function Home(props) {
    return (
      <>
          <h1>Home Componet: {props.greeting}</h1>
      </>
    )
  }
  export function About(){
      return(
          <>
              <h1>About Component here </h1>
          </>
      )
  }
console.log("********************************************************")

import Home,{About} from './Home'
function App() {
  return (
    <div>
      <h2>App Component </h2>
      <Home greeting = "Have a greate day " />
         {About()}
    </div>
  );
}
function Home(props) {
    return (
      <>
          <h1>Home Componet: {props.greeting}</h1>
      </>
    )
  }
  export function About(){
      return " About Component here"  
  }
  
console.log("********************************************************")

import Home,{About,Main} from './Home'
function App() {
  return (
    <div>
      <h2>App Component </h2>
      <Home greeting = "Have a greate day " />
         {About()}
         <Main />
    </div>
  );
}

function Home(props) {
    return (
      <>
          <h1>Home Componet: {props.greeting}</h1>
      </>
    )
  }
  export function About(){
      return " About Component here"  
  }
  export function Main(){
      return(
          <h1>Main component</h1>
      )
  }
console.log("********************************************************")

function RenderList({listItem}){
    return(
      <li> {listItem} </li>
    )
  }
  function App() {
    let items = ["item 1 ", "item 2", "item 3"];
    return (
      <div>
        <h2>App Component </h2>
          <ol>
            {items.map((item,i)=>{
              return <RenderList listItem = {item}  key = {i}/>
            })}
          </ol>
      </div>
    );
  }
console.log("********************************************************")


console.log("********************************************************")