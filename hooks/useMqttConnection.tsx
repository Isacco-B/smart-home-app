import { useState, useEffect } from "react";
import { createMqttClient } from "../services/mqttService";
import { MqttClient } from "mqtt";

export type MqttStatus =
  | "Connected"
  | "Disconnected"
  | "Offline"
  | "Reconnecting"
  | "Error";

export type MqttError = {
  type: string;
  msg: string;
};

export type MqttData = {
  message: any;
  topic: string;
};

export type ClientMqtt = MqttClient

function useMqttConnection(doMqttConnection: boolean) {
  const [mqttStatus, setMqttStatus] = useState<MqttStatus>("Disconnected");
  const [mqttError, setMqttError] = useState<MqttError | null>(null);
  const [mqttData, setMqttData] = useState<MqttData | null>(null);
  const [mqttClient, setMqttClient] = useState<ClientMqtt | null>(null);

  useEffect(() => {
    if (!doMqttConnection) return;

    const client = createMqttClient({
      ssl: true,
      setMqttStatus,
      setMqttError,
      uniqueId: "react-native-0000",
      onMessage: ({ topic, message }: MqttData) => {
        setMqttData(() => ({
          message,
          topic,
        }));
      },
    });

    setMqttClient(client);

    return () => {
      if (client) {
        client.end();
      }
    };
  }, [doMqttConnection]);

  return {
    mqttClient,
    mqttData,
    mqttStatus,
    mqttError,
    setMqttStatus,
    setMqttError,
  };
}

export default useMqttConnection;
