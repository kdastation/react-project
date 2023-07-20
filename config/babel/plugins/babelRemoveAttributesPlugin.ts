import { PluginItem } from "@babel/core";

type State = {
  opts: {
    attributes: string[];
  };
};

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state: State) {
        const attributes = state.opts.attributes || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (attributes.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
