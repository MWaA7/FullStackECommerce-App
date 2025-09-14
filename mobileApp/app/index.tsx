import React from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import ProductListItem from "@/components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });

  const noOfCol = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  if (isLoading) {
    return <ActivityIndicator className="max-h-[960px] h-full" />;
  }

  if (error) {
    return (
      <Text
        style={{
          textAlign: "center",
          alignSelf: "center",
          marginTop: "80%",
          fontWeight: "bold",
        }}
      >
        Error fetching products !!!
      </Text>
    );
  }

  return (
    <FlatList
      key={noOfCol}
      data={data}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={noOfCol}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
    />
  );
}
