import { type ReactNode } from "react";
import strings from "../data/strings.json";

export default function () {

  function recursiveTree(root: Object, depth: number): ReactNode {
    {
      return Object.entries(root).map(([key, value]) => {
        // console.log(key, "-", value);
        if (
          Object.keys(value).length > 0 &&
          typeof value !== "string"
        ) {
          let node = recursiveTree(value, depth + 1);
          return (
            <div key={key}>
              <p>
                {" ".repeat(depth * 2)}
                {"|- "}
                {key}
              </p>
              <p>{node}</p>
            </div>
          )
        }

        return (
          <div key={key}>
            <p>
              {" ".repeat(depth * 2)}

              {"|- "}
              {value}
            </p>
          </div>
        );
      });
    }
  }

  function parseObjectToTree(root: object): ReactNode {
    // Map over all the keys and if there is any sub-key add them recursivly
    return recursiveTree(root, 0);
  }

  return (
    <div className="m-4">

      <div className="">
        <p>Name: Ashkan (James Sage)</p>
        <p>Nickname: Fractuna</p>
        <p>Status: Focused</p>
        <p>Song: <a className="text-blue-400 underline" href="https://open.spotify.com/track/5mQe53209gyjHTy3yJpxMj?si=1b07aadf82cc4fbe">The Legend Of Zelda: Ocratina Of Time</a></p>

        <br />

        Gear:
        <pre>
          {parseObjectToTree(strings.Gear)}
        </pre>

        <br />

        <div className="">

          <p>Hello! my name is Ashkan (you can also call me james) and I’m a technology enthusiasm who likes Programming, Math, science, space, and all those nerdy stuffs.
            I’m an undergraduated software engineering student that loves learning and developing software, hardware with a big passion about acadamics and complex learning.
            I love to make technology tools such as software programs or embedded decies that improve life, people and the universe.
            Then if you find yourself fit wtih this type of contents, then you are so welcome to my blog.
            have a good one.</p>

          <br />

          <p>- What do I do?</p>
          <p className="ml-5">First of all, I try to live happily, This is my rule in life. And for an happy life I have to have physical & mental health. With an happy life, I do Programming, Reading and the most important activity in my life, _Learning_.</p>
          <br />

          <p>- What do I like to work on?</p>
          <p className="ml-5">Well i like to work on any cool projects that I find. But mostly i love to do projects that teaches me something new. Productivity is the byproduct of my works and thinkings.</p>
          <br />

        </div>
      </div>
    </div >
  );
}
