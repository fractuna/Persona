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
    <div className="m-3">
      <p>Name: Ashkan (James Sage)</p>
      <p>nickname: Fractuna</p>
      <p>status: Focused</p>

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

      </div>
    </div >
  );
}
