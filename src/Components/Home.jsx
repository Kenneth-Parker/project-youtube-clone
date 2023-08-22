import HomeNavBar from "./HomeNavBar"
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <>
      <div>
        <header>
          <HomeNavBar />
        </header>

        <SearchBar />
      </div>
    </>
  );
};

export default Home;
