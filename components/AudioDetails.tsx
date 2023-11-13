// components/AudioDetails.tsx

type Props = {
  title: string;
  author: string;
  thumbnail: string;
};
export const AudioDetails = ({ title, author, thumbnail }: Props) => {
  return (
    <div className="rounded-t-xl w-full max-w-[320px]">
      <div className="flex space-x-4">
          <img
            src={thumbnail}
            alt=""
            className="flex-none object-cover w-24 h-24 rounded-lg bg-gray-100"
          />

        <div className="flex flex-col gap-2 justify-start">
          <p className="text-gray-200 text-lg leading-6 font-semibold truncate w-auto">
            {title}
          </p>

          <p className="text-cyan-500  text-sm leading-6 capitalize">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};
