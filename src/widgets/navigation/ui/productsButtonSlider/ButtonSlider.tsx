interface PropsButton {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonSlider = ({ text, onClick }: PropsButton) => {
  return (
    <button onClick={onClick} className="cursor-pointer font-heading text-sm rounded-lg py-1 px-2 border border-opacity-10 hover:bg-gray-300 border-black transition-all">
      {text}
    </button>
  );
};
