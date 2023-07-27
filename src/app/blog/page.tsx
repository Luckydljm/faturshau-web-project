/**
 * A temp function to print blog post cards
 * @param i Number of blog post to be printed
 * @returns Blog post cards
 */
const printBlogPost = (i: number) => {
  let arr: React.JSX.Element[] = [];
  for (let index = 0; index < i; index++) {
    arr.push(
      <article>
        <h3>test {index + 1}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          quia necessitatibus incidunt consequuntur voluptatum sed sunt quis
          esse eius. Perspiciatis!
        </p>
        <a href="">Read More</a>
      </article>,
    );
  }

  return arr;
};

const page = () => {
  return (
    // section-1
    <section className="bg-zinc-200 px-4 pb-6 pt-2">
      <div>
        <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p className="mb-2 mt-1 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          exercitationem aut autem, illum suscipit esse?
        </p>
      </div>
      <div>
        <input
          className="border-b border-b-zinc-400 bg-transparent p-3 text-sm focus:outline-none md:text-lg lg:w-3/5"
          type="email"
          placeholder=">>> Your Best Email"
        />
        <button className="text-light mt-4 rounded border border-zinc-400 bg-zinc-800 py-1.5 font-bold md:text-lg lg:mt-0 lg:px-8">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default page;
