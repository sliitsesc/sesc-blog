type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-20 h-20 rounded-full mr-4 shadow-sm border-[5px] border-darkBlue"
        alt={name}
      />
      <div className="text-2xl font-bold leading-5">
        <span className="text-lg font-normal italic">Written by</span>
        <br />
        {name}
      </div>
    </div>
  );
};

export default Avatar;
