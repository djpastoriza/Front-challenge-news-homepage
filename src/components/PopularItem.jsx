const PopularItem = ({ img, top, title, text }) => {
  const urlImgFolder = 'src/assets/images/';

  return (
    <div className="my-5 flex items-stretch border-b-[1px] border-white py-5 text-white last-of-type:border-y-0">
      <img className="mr-5 aspect-[2/1] object-contain" src={urlImgFolder + img} />
      <div className="flex flex-col">
        <span className="text-primary mb-3 text-5xl text-[#c9c8d0]">{top}</span>
        <h3 className="text-primary mb-3 text-2xl text-[#00001a]">{title}</h3>
        <p className="mb-3 text-lg leading-10 text-[#8b898e]">{text}</p>
      </div>
    </div>
  );
};

export default PopularItem;
