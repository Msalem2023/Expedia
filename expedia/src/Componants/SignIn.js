import { Form, json } from "react-router-dom";


function SignIn() {


  return (
    <>
      <section class="vh-100" style={{backgroundColor: "#9A616D"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius: "1rem"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://th.bing.com/th/id/OIP.fKXAfxZfQe5ohUYYKd-GWQHaLG?pid=ImgDet&w=735&h=1102&rs=1"
                alt="login form" class="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <Form method="POST">

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span class="h1 fw-bold mb-0">Expedia</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" name="Email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" name="Password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
                      style={{color: "#393f81"}}>Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </Form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
export default SignIn
export const action=async({request})=>{
  const data= await request.formData()
  const enteredData= {
    Email: data.get('Email'),
    Password:data.get('Password')
  }
  console.log(enteredData)
  const response= await fetch('http://localhost:4000/user/SignIn',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(enteredData)


  })
  const info=await response.json()
  console.log(info)
  const token =info.token
  console.log(token)

  if(!response){
      throw json({message:"something went wrong"})
  }else{
    console.log(info)
    window.localStorage.setItem("token",token)
    window.localStorage.setItem("isLoggedIn",true)

    window.location.href="/Profile"
    
    return info

  }

 
}