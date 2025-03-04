const key = process.env.SAMPLE_SECRET_KEY;
const page = () => {
  return (
    <div>
      Next.jsヤッホー github actionsで自動デプロイ開始→デプロイなう
      <p> 環境変数:{key}</p>
    </div>
  );
};

export default page;
