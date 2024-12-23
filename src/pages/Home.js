import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, HTML, CSS, SCSS, BootStrap,
                Tailwind CSS, BootStrap, E2E, Unit Tests, Jest, React Testing
                Library, NPM, Yarn
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Other Skills</h2>
              <p>PostgreSQL, C++, Figma, UI/UX</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
