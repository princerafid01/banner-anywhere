import { useState } from "react";
import { Button, ActionList, Popover } from "@shopify/polaris";
import BannerEditor from "./Components/BannerEditor";

export default function BannerCreateButton() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Popover
        active={active}
        activator={
          <Button
            onClick={() => setActive((prev) => !prev)}
            disclosure
            variant="primary"
          >
            Create Banner
          </Button>
        }
        autofocusTarget="first-node"
        onClose={() => setActive((prev) => !prev)}
      >
        <ActionList
          actionRole="menuitem"
          items={[
            {
              content: "Create a simple Banner",
              onAction: () => document.getElementById("my-modal").show(),
            },
            {
              content: "Bank Deposit",
              onAction: () => null,
            },
          ]}
        />
      </Popover>
      <ui-modal id="my-modal" variant="max">
        <BannerEditor />
        <ui-title-bar title="Banner Anywhere - Create Banner">
          <button variant="primary">Publish</button>
          <button>Secondary action</button>
        </ui-title-bar>
      </ui-modal>
    </>
  );
}
