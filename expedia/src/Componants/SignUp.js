import { Form, json } from "react-router-dom";

function SignUp() {

  return (
<Form method="POST" class="text-center ">
  <div class="p-5 bg-image" style={{
        backgroundImage: "url(https://cdn.bestreviews.com/images/v4desktop/image-full-page-1040/1ecdab81627660c6f8ef4749fcdf4884.jpeg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",
        height:" 300px"}}></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"
  }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Sign up now</h2>
          <form>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example1" name="UserName" class="form-control" />
                  <label class="form-label" for="form3Example1">User Name</label>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example2" name="Password" class="form-control" />
                  <label class="form-label" for="form3Example2">Password</label>
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" name="Email" class="form-control" />
              <label class="form-label" for="form3Example3">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form3Example4" name="CPassword" class="form-control" />
              <label class="form-label" for="form3Example4">Confirm your Password</label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <label class="form-check-label" for="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              Submit
            </button>

            <div class="text-center">
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</Form>

  )

}
export default SignUp
export const action = async ({ request, params }) => {
  const data = await request.formData()
  const enteredData = {
    UserName: data.get('UserName'),
    Email: data.get('Email'),
    Password: data.get('Password'),
    CPassword: data.get('CPassword')
  }
  const response = await fetch('http://localhost:4000/user/SignUp', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(enteredData)


  })
  if (!response) {
    throw json({ message: "something went wrong" })
  }
  const info= response
  console.log(info)
  return info

}