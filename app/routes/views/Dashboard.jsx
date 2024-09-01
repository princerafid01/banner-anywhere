import { Card, IndexTable, Page } from "@shopify/polaris";
import ResourceEmptyState from "./EmptyState";
import BannerCreateButton from "./BannerCreateButton";

export default function Dashboard() {
  return (
    <Page
      title={"Banners"}
      primaryAction={<BannerCreateButton />}
    //   secondaryActions={[
    //     {
    //       content: "Export",
    //       accessibilityLabel: "Export product list",
    //       onAction: () => alert("Export action"),
    //     },
    //     {
    //       content: "Import",
    //       accessibilityLabel: "Import product list",
    //       onAction: () => alert("Import action"),
    //     },
    //   ]}
    >
      <Card padding="0">

        {/* <IndexTable
          itemCount={0}
          resourceName={{ singular: "product", plural: "products" }}
          selectedItemsCount={0}
        >
          <IndexTable.Row
          // id={id}
          // key={id}
          // selected={selectedResources.includes(id)}
          // position={index}
        >
          {/* <IndexTable.Cell>{vendor}</IndexTable.Cell>
        </IndexTable.Row>
        </IndexTable> */}

        <ResourceEmptyState title="Manage your banners" buttonText="Add Banner" />
      </Card>
    </Page>
  );
}
