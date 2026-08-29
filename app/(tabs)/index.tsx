import "@/global.css";
import { Link } from "expo-router";

import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold ">Home</Text>

      <Link
        href="/onboarding"
        className="p-4 mt-4 font-sans-bold text-white rounded bg-primary"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign_up"
        className="p-4 mt-4 font-sans-bold text-white rounded bg-primary"
      >
        create an account
      </Link>
      <Link
        href="/(auth)/sign_in"
        className="p-4 mt-4 font-sans-bold text-white rounded bg-primary"
      >
        Log in
      </Link>
    </SafeAreaView>
  );
}
