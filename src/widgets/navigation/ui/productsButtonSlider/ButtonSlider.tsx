interface PropsButton {
  text: string;
}

export const ButtonSlider = ({ text }: PropsButton) => {
  return (
    <button className="cursor-pointer text-sm rounded-lg py-1 px-2 border border-opacity-10 hover:bg-gray-300 border-black transition-all">
      {text}
    </button>
  );
};
