const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //autocomplete="off"
          //autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
