export default function Custom404() {
  return (
    <div className="min-h-screen min-w-screen justify-center flex flex-column items-center">
      <div className="flex flex-row justify-center text-center">
        <p className="text-3xl text-balance font-semibold">404</p>
        <div className="divider divider-horizontal divider-primary" />
        <div className="flex justify-center items-center">
          <p className="text-base text-pretty">This page could not be found.</p>
        </div>
      </div>
    </div>
  );
}
