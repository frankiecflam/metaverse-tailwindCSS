export function GetStartedItem({
  index,
  content,
}: {
  index: string;
  content: string;
}) {
  return (
    <li className="flex items-center gap-x-4">
      <p className="bg-[#323f5d] rounded-3xl p-5 text-primary font-bold tracking-widest">
        {index}
      </p>
      <p className="text-secondary text-lg max-w-[270px]">{content}</p>
    </li>
  );
}

const GetStartedList = () => {
  return (
    <ul className="mt-8 flex flex-col gap-y-8">
      <GetStartedItem
        index="01"
        content="Find a world that suits you and you want to enter"
      />
      <GetStartedItem
        index="02"
        content="Enter the world by reading basmalah to be safe"
      />
      <GetStartedItem
        index="03"
        content="No need to beat around the bush, just stay on the gas and have fun"
      />
    </ul>
  );
};

export default GetStartedList;
