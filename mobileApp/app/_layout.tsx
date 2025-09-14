import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "@/components/useColorScheme";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode={colorScheme === "dark" ? "dark" : "light"}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Shop" }} />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
