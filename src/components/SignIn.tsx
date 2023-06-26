function SignInForm() {
  return (
    <div className="bg-white flex p-5 md:p-12 flex-col md:flex-row justify-center px-6 py-12 lg:px-8 rounded-xl items-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className=" mx-auto md:mx-0 h-10 w-auto"
          src="https://nextet.vercel.app/api?id=CalcApp.png"
          alt="Whitworth logo"
        />
        <h2 className="mt-4 text-center md:text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center md:text-left text-sm leading-5 text-gray-600 max-w">
          Whitworth placement test platform for incoming students.
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm p-5 md:p-12">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
