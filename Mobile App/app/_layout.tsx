import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "@/components/useColorScheme";
import { Stack } from "expo-router";

import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme === "dark" ? "dark" : "light"}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Shop" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
