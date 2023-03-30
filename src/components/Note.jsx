const Note = () => {
  return (
    <article className="mb-5 lg:flex lg:gap-5 lg:m-0">
      <h1 className="font-bold text-primary mb-5 text-6xl font-bold lg:w-[50%]">
        The Bringht Future of Web 3.0?
      </h1>
      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-between">
        <p className="mb-5 text-base flex-1 font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          vero dolores sit, eos earum harum assumenda impedit ducimus laborum
          perferendis voluptas adipisci quas. Impedit officiis vel a eveniet
          placeat iure!
        </p>
        <button className="w-[200px] bg-[#00001a] px-10 py-2 text-white hover:bg-[#f15d4f]">
          READ MORE
        </button>
      </div>
    </article>
  );
};

export default Note;
