import MainLayout from "../comps/MainLayout";

export default () => (
  <div>
    <MainLayout>
      <p>
        This website is intended to show some batman comics and it descriptions.
      </p>
      <style jsx>
        {`
          p {
            font-family: Arial;
            font-size: 30px;
            color: #aaa;
          }
        `}
      </style>
    </MainLayout>
  </div>
);
