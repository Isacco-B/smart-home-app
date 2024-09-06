import mqtt from "mqtt";
import { envConfig } from "../config/secrets";
import { emitStateError } from "./errorHandler";
import { MqttData, MqttError, MqttStatus } from "@/hooks/useMqttConnection";

type CreateMqttClientOptions = {
  ssl: boolean;
  setMqttStatus: (status: MqttStatus) => void;
  setMqttError: (error: MqttError) => void;
  uniqueId: string;
  onMessage: (data: MqttData) => void;
};

function createMqttClient({
  ssl = true,
  setMqttStatus,
  setMqttError,
  uniqueId,
  onMessage,
}: CreateMqttClientOptions) {
  const host = envConfig.MQTT_HOST;
  const path = "/ws";
  const protocolVersion = envConfig.MQTT_VERSION;
  let port = envConfig.MQTT_PORT;
  let protocol = "ws";

  if (ssl) {
    port = envConfig.MQTT_PORT_SSL;
    protocol = "wss";
  }

  const brokerUrl = `${protocol}://${host}:${port}${path}`;

  const client = mqtt
    .connect(brokerUrl,{
      protocol,
      host,
      port,
      path,
      protocolVersion,
      clientId: uniqueId,
      username: envConfig.MQTT_USERNAME,
      password: envConfig.MQTT_PASSWORD,
      reconnectPeriod: 5000,
      queueQoSZero: true,
      resubscribe: true,
      clean: true,
      keepalive: 30,
      properties:
        protocolVersion === 5
          ? {
              sessionExpiryInterval: 600,
            }
          : undefined,
    })
    .on("connect", () => {
      setMqttStatus("Connected");
    })
    .on("error", (error) => {
      setMqttStatus("Error");
      emitStateError(setMqttError, "MqttGeneral", error);
    })
    .on("disconnect", (packet) => {
      setMqttStatus("Disconnected");
    })
    .on("offline", () => {
      setMqttStatus("Offline");
    })
    .on("reconnect", () => {
      setMqttStatus("Reconnecting");
    })
    .on("close", () => {
      setMqttStatus("Disconnected");
    })
    .on("message", (topic, message, packet) => {
      onMessage({topic, message});
    });

  return client;
}

export { createMqttClient };
