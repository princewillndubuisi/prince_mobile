import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="p-4 mt-4 text-white rounded bg-primary"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign_up"
        className="p-4 mt-4 text-white rounded bg-primary"
      >
        create an account
      </Link>
      <Link
        href="/(auth)/sign_in"
        className="p-4 mt-4 text-white rounded bg-primary"
      >
        Log in
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="p-4 mt-4 text-white rounded bg-primary"
      >
        Spotify Subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="p-4 mt-4 text-white rounded bg-primary"
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
