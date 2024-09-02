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
  FormLayout
} from "@shopify/polaris";
import { Frame } from "@shopify/polaris";

export default function BannerEditor() {
  const [url, setUrl] = useState("All products");
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const [text, setText] = useState("🎁 Special discount — 50% off all items");

  return (
    <Frame>
      <Page
        title="Quicky"
        secondaryActions={[{ content: 'Publish', disabled: false }]}
        breadcrumbs={[{ content: 'Home', url: '/' }]}
      >
        <Layout>
          {/* Sidebar */}
          <Layout.Section oneThird>
            <Card title="Banner content" sectioned>
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
          </Layout.Section>

          {/* Main Content */}
          <Layout.Section>
            <Card title="Announcement Bar">
              <div style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "16px",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text variant="headingMd">{text}</Text>
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Text variant="bodyMd">This is how your banner will look on your website</Text>
              </div>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  );
}
