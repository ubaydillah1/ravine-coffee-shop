type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  type = "text",
  className,
  ...props
}) => {
  return (
    <input
      type={type}
      className={`w-full p-[11px] b2-r rounded-[6px] border border-neutral-n300 focus:outline-none text-neutral-n900 ${
        className ?? ""
      }`}
      {...props}
    />
  );
};

export default Input;
