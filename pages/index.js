import MainLayout from "../comps/MainLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <MainLayout>
    <h1>Batman's TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
      <style jsx global>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          margin: 10px;
          padding: 0;
        }

        li {
          border-bottom: solid #ccc 1px;
          list-style: none;
          margin: 0;
          font-size: 18px;
          padding: 10px;
        }

        li:hover {
          background: #f0f0f0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </ul>
  </MainLayout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    shows: data
  };
};

export default Index;
