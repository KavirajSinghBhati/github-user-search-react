export default function Description({ name, location, repos }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <p>{repos}</p>
    </div>
  );
}
