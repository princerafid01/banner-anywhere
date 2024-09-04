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
    { icon: HomeIcon, tooltip: "Templates" },
    { icon: OrderIcon, tooltip: "Content" },
    { icon: ProductIcon, tooltip: "Styles" },
    { icon: SettingsIcon, tooltip: "Settings" },
  ];

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.05)", height: "100%" }}>
      <Layout>
        {/* Sidebar */}
        <Layout.Section variant="oneThird">
          <InlineStack gap={400}>
            <div
              style={{
                padding: "8px",
                height: "100vh",
                background: "#fff",
                borderRight: "1px solid #ddd",
              }}
            >
              {iconMenu.map(({ icon, tooltip }, key) => (
                <div
                  style={{
                    textAlign: "center",
                    display: "block",
                    padding: "10px 0",
                  }}
                  key={key}
                >
                  <Icon source={icon} />
                  {tooltip}
                </div>
              ))}
            </div>
            <BlockStack>
              <div style={{ padding: "18px 5px" }}>
                <Text variant="headingMd" as="h6" style={{ padding: "20px" }}>
                  Banner Content
                </Text>
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
            </BlockStack>
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
    </div>
  );
}
