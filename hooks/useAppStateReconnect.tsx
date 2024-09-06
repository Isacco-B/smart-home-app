import { useEffect, useRef } from "react";
import { AppState } from "react-native";
import { ClientMqtt } from "./useMqttConnection";


function useAppStateBackground(mqttClient: ClientMqtt) {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active" &&
        mqttClient
      ) {
        mqttClient.reconnect();
      } else if (mqttClient) {
        mqttClient.end();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [mqttClient]);

  return appState.current;
}

export default useAppStateBackground;
