import { useState } from "react";
import {
  Page,
  Layout,
  Card,
  Button,
  TextField,
  Checkbox,
  Text,
  Link,
  FormLayout,
  BlockStack,
  Icon,
  InlineStack,
} from "@shopify/polaris";

import {
  HomeIcon,
  OrderIcon,
  ProductIcon,
  PersonFilledIcon,
  DataTableIcon,
  SettingsIcon,
} from "@shopify/polaris-icons";

export default function BannerEditor() {
  const [url, setUrl] = useState("All products");
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const [text, setText] = useState("🎁 Special discount — 50% off all items");
  const iconMenu = [
    { icon: HomeIcon, tooltip: "Home" },
    { icon: OrderIcon, tooltip: "Orders" },
    { icon: ProductIcon, tooltip: "Products" },
    { icon: PersonFilledIcon, tooltip: "Customers" },
    { icon: DataTableIcon, tooltip: "Analytics" },
    { icon: SettingsIcon, tooltip: "Settings" },
  ];

  return (
    <Layout>
      {/* Sidebar */}
      <Layout.Section variant="oneThird">
        <InlineStack gap="600">
          <div style={{ padding: "10px" }}>
            {iconMenu.map(({ icon, tooltip }, key) => (
              <div
                style={{
                  textAlign: "center",
                  display: "block",
                  padding: "10px",
                }}
                key={key}
              >
                <Icon source={icon} />
                {tooltip}
              </div>
            ))}
          </div>

          <Card>
            <FormLayout>
              <TextField
                label="URL"
                value={url}
                onChange={(value) => setUrl(value)}
                prefix={<Link>Visit link</Link>}
                connectedRight={
                  <Button onClick={() => alert("All products selected")}>
                    All products
                  </Button>
                }
              />
              <Checkbox
                label="Open in new tab"
                checked={openInNewTab}
                onChange={(checked) => setOpenInNewTab(checked)}
              />
              <TextField
                label="Text"
                value={text}
                onChange={(value) => setText(value)}
                multiline
                prefix={<strong>Locales</strong>}
                helpText="Add the banner text here"
              />
            </FormLayout>
          </Card>
        </InlineStack>
      </Layout.Section>

      {/* Main Content */}
      <Layout.Section variant="twoThirds">
        <Card title="Announcement Bar">
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "16px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text variant="headingMd">{text}</Text>
          </div>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Text variant="bodyMd">
              This is how your banner will look on your website
            </Text>
          </div>
        </Card>
      </Layout.Section>
    </Layout>
  );
}
