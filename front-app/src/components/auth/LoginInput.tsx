import { useFormContext } from "react-hook-form";

interface ILoginInputProps {
  name: string;
  label: string;
  type?: string;
}

export const LoginInput = ({ name, label }: ILoginInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <input type={"text"} {...register(name)} />
      {errors[name] && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};
