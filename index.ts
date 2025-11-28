import { getHealthCron } from "@/crons/health";
import * as clientCrons from "@/crons/clients";

export async function runCrons() {
  await getHealthCron();
  await clientCrons.getClientCron();
  await clientCrons.postClientCron();
  await clientCrons.getClientIDCron();
  await clientCrons.PublicKeyCron();
  await clientCrons.updateClientCron();
  await clientCrons.ClientStatusCron();
  console.log("All crons executed, At", new Date().toISOString());
}

runCrons();
