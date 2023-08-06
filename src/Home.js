import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
  return (
    <>

    <div>            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder="User Name" />
                </div>
                <div>
                    <label>pasword</label>
                    <input type="password" required placeholder="Password" />
                </div>
        
        
                <button type="submit">Send</button>
            </form></div>
      <div className="container">
      
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;