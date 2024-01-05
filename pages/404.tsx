import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | HelcsnewsXD</title>
        <meta
          name="description"
          content="Error 404: Esta página no se pudo encontrar."
        />
      </Head>

      <div className="min-h-screen min-w-screen justify-center flex flex-column items-center">
        <div className="flex flex-row justify-center text-center">
          <p className="text-3xl text-balance font-semibold">404</p>
          <div className="divider divider-horizontal divider-primary" />
          <div className="flex justify-center items-center">
            <p className="text-base text-pretty">
              Esta página no se pudo encontrar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
