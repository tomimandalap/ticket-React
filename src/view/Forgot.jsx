import alertCustom from '../helpers/alert'
const Forgot = () => {
  const activatenow = (data) => {
    alertCustom('success', data)
  }
  return (
    <div className="forgot">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="color1 f-xl f-weight">Tickitz</h3>
            <h3 className="f-weight mt-4">Forgot password</h3>
            <p className="f-sm color3">We'll send a link to your email shortly</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 form-group">
            <label htmlFor="form-email" className="f-md">Email</label>
            <input id="form-email" type="email" placeholder="Write your email" required className="form-control h-100 w-100 box" />
          </div>
          <div className="col-12 mt-5">
            <button onClick={() => activatenow('Hai')} type="submit" className="btn btn-input w-100">Activate now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Forgot