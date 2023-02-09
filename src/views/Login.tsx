import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useAppState } from "../context";
import Error from "../components/Error";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required')
});

const Login = () => {
  const { isLoggedIn, setLoginUser } = useAppState("auth");

  const navigate = useNavigate();

  const { handleSubmit, formState: { errors }, control } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  const onSubmit = (data: any) => {
    // Login check Login will be here
    setLoginUser()
  }

  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* UserName */}
        <div>
          <label>Username</label>
          <Controller
            render={({ field }) => <input {...field} type={"text"} autoComplete="off" placeholder=" " />}
            name={"username"}
            control={control}
            defaultValue=""
          />
          <Error name="username" errors={errors} />
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <Controller
            render={({ field }) => <input {...field} type={"password"} autoComplete="off" placeholder=" " />}
            name={"password"}
            control={control}
            defaultValue=""
          />
          <Error name="password" errors={errors} />
        </div>

        <button>Login</button>
      </form>
    </div>
  )
}

export default Login