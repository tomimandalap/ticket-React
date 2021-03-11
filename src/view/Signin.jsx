import { Link } from 'react-router-dom'
import alertCustom from '../helpers/alert'
const Signup = () => {

  const btnGoogle = () => {
    alertCustom('info', 'Google')
  }
  const btnFb = () => {
    alertCustom('info', 'Facebook')
  }
  return (
    <div className="signup">
      {/* web */}
      <div className="web d-sm-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Sign in</h1>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile d-sm-none d-block">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="color1 f-xl f-weight">Tickitz</h3>
            </div>
            <div className="col-12 mt-4 mb-4">
              <h4 className="c-black f-lg f-weight">Sign in</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 form-group">
              <label htmlFor="form-email" className="f-md">Email</label>
              <input id="form-email" type="email" placeholder="Write your email" required className="form-control h-75 w-100 box" />
            </div>
            <div className="col-12 form-group mt-4">
              <label htmlFor="form-pass" className="f-md">Password</label>
              <input id="form-pass" type="password" placeholder="Write your password" minLength="8" required className="form-control h-75 w-100 box" />
            </div>
            <div className="col-12 mt-5">
              <button type="submit" className="btn btn-input w-100">Sign In</button>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 mt-5">
              <p>Forgot password? <Link className="line" to="/forgot">Reset now</Link></p>
            </div>
            <div className="col-12">
              <p className="f-sm color2">or</p>
            </div>
            <div className="col-12">
              <button onClick={btnGoogle} className="btn btn-shadow mr-4"><i className="fab fa-google"></i></button>
              <button onClick={btnFb} className="btn btn-shadow bg-fb"><i className="fab fa-facebook"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup