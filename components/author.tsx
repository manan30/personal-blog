const Author = () => {
  return (
    <div className="flex items-center mb-8">
      <img
        className="h-16 w-16 mr-4 rounded-full bg-center bg-no-repeat bg-contain"
        alt="Profile"
        src="/images/profile-picture.jpg"
        loading="lazy"
      />
      <div className="text-sm">
        {/* <div style={{ marginBottom: '0.5rem' }}>
          Personal blog by
          <a href="https://mananjoshi.me"> Manan Joshi</a>
        </div> */}
        <a href="https://mananjoshi.me"> Manan Joshi</a> is a passionate
        full-stack developer working with web technologies. He loves using
        React, GraphQL, Gatsby, Next JS, Svelte and other cool stuff. Feel free
        to reach out to him if you would like to create your ideal website or
        web application.
        {/* Come say hi on{' '}
          <a href="https://twitter.com/manan__joshi">Twitter</a> or{' '}
          <a href="https://www.instagram.com/manan__joshi/?hl=en">Instagram</a>! */}
      </div>
    </div>
  );
};

export default Author;
