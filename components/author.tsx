const Author = () => {
  return (
    <div className="flex items-center mb-4 mx-auto px-4 max-w-lg md:px-0 md:max-w-xl lg:max-w-4xl">
      <img
        className="h-12 w-12 md:h-16 md:w-16 mr-4 rounded-full object-cover object-center"
        alt="Profile"
        src="/images/profile-picture.webp"
        loading="lazy"
      />
      <div className="text-xxs md:text-sm">
        <a href="https://mananjoshi.me"> Manan Joshi</a> is a passionate
        full-stack developer working with web technologies. He loves using
        React, GraphQL, Gatsby, Next JS, Svelte and other cool stuff. Feel free
        to reach out to him if you would like to create your ideal website or
        web application.
      </div>
    </div>
  );
};

export default Author;
