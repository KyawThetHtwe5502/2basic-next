import Button from "./components/Button";

export default async function Page() {
  const res= await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return <div>
     <h1>My Product list</h1>
     <ul>
      {data.map(({id,title}) => 
      <li key={id}>{title}</li>)}
     </ul>
     <Button/>
  </div>
}