import { useState } from "react";
import { Button, ActionList, Popover } from "@shopify/polaris";

export default function BannerCreateButton() {
  const [active, setActive] = useState(false);

  return (
    <Popover
      active={active}
      activator={
        <Button onClick={() => setActive((prev) => !prev)} disclosure variant="primary">
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
            onAction: () => null,
          },
          {
            content: "Bank Deposit",
            onAction: () => null,
          },
        ]}
      />
    </Popover>
  );
}
