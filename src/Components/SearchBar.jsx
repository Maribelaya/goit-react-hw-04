const SearchBar = (onSearch) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    e.target.reset();
    if (e.target.elements.query.value.trim() === "") {
      alert("Please enter search term!");
    }
    return (
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  };
};
export default SearchBar;
