export default function SearchInput({ handleChange }) {
  return (
    <input className="h-16" onChange={(e) => handleChange(e.target.value)} />
  );
}
