import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 style ={{color: "black", fontsize: "100px"}}>Home</h1>
      <p>Home page</p>

      <Link rel="stylesheet" to ="/about">About</Link>
      <Link rel="stylesheet" to ="/recipes">Recipes</Link>

    </div>
  );
}