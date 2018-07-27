import { withRouter } from "next/router";
import MainLayout from "../comps/MainLayout";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <MainLayout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
    <style jsx>
      {`
        * {
          font-family: Arial;
        }
      `}
    </style>
  </MainLayout>
);

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
