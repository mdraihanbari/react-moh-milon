import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Resister = () => {

  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()

    const handleResister = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password,  )

      createUser(email, password)
      .then(result =>{
        console.log(result)
        e.terget.reset()
        navigate("/")
      })
      .catch(error =>{
        console.log('ERROR', error.message)
      })
    }

    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center">Resister Now !</h1>
            <form onSubmit={handleResister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                 
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Resister</button>
              </div>
            </form>
            <p className="p-4">Alrady Have an account. Please <Link to="/login" className="hover:underline">Login</Link></p>
          </div>
        </div>
    );
};

export default Resister;