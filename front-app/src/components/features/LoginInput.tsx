import { useFormContext } from "react-hook-form";

interface LoginInputProps {
  name: string;
  label: string;
  type?: string;
}

export const LoginInput = ({ name, label, type = "text" }: LoginInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(name)} />
      {errors[name] && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};
