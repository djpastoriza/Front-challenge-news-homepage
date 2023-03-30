
const NewItem = ({ title, text }) => {
  return (
    <div className="text-white my-5 py-5 border-b-[1px] border-white last-of-type:border-y-0 w-[350px]">
      <h3 className="cursor-pointer text-primary text-2xl mb-5 hover:text-[#f0aa55]">{ title }</h3>
      <p>{ text }</p>
    </div>
  );
};

export default NewItem;
