import React from "react";

const Blogs = () => {
  return (
    <div className="pt-10">
      <div className="leading-9  ">
        <h1>What is Semintic tag?</h1>
        <p>
          Semantic tag provides us with much information in HTML elements. this
          tag can help us, what type of information into this tag. that is why
          any developer quickly understands. what type of tag is it there are
          many kinds of HTML semantic tags like article, blog, header, footer
          form, table
        </p>

        <h1>what is context api is react? </h1>
        <div>
          <p>
            A context API is a kind of react hook that's provide us with a
            custom hook this hooks help us to pass data from parents to child
            component without using props. Context provides a way to pass data
            through the component tree without having to pass props down
            manually at every level. it can solve the props drilling problem.
            react pass data in top-down approach. in props pass these values in
            every level of the component. but context can share these values in
            that component without passing data in every level of tree
          </p>
        </div>
        <div>
          <h1>What is inline Block element?</h1>

          <p>
            Inline block elements are similar to an inline element. It can add
            padding and margin on four sides. The inline-block element doesn't
            add any new lines. But the Block element adds a new line. The
            inline-block element also set its own width and height in this
            element and it also has its own padding a margin element.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
