import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../service/mutation/useLogin";
import * as z from "zod";
import { saveState } from "../config/storage";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(3, "Please enter a valid value"),
  password: z
    .string(2)
    .min(3, "eng kam qiymat 3ta")
    .max(4, "eng ko'p qiymat 4 ta"),
});

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });
  const { mutate } = useLogin();
  const navigate = useNavigate();
  const submit = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });
  };
  return (
    <div className='flex items-center justify-center h-[100vh]'>
    <div className='w-[450px] h-[350px] bg-slate-400 shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center'>   
    <form className='flex items-center jc flex-col gap-3' onSubmit={handleSubmit(submit)}>
        <input className='w-[350px] h-[50px] rounded-lg border-gray-400 border-2 px-3' {...register("email")} type="email" placeholder='email kiriting' required />

        <input className='w-[350px] h-[50px] rounded-lg border-gray-400 border-2 px-3' {...register("password")} type="password" placeholder='parol kiriting' required />
        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
        <button className='w-[250px] rounded-xl h-[50px] font-bold text-lg bg-blue-500 text-white' type='submit'>send</button>
    </form>
    </div>

</div>
  );
};
