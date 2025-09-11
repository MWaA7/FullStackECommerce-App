import React from "react";
import { FlatList, Platform, View } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";

export default function Home() {
  // const noOfCol = Platform.OS === "web" ? 3 : 2

  const noOfCol = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  return (
    <FlatList
      key={noOfCol}
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={noOfCol}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
    />
  );
}
