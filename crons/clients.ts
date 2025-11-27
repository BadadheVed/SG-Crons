import { getHealthCron } from "./health";

export async function getClientCron() {
  const res = await fetch("https://subscription.stackguard.io/clients");

  console.log("Client Cron Status:", res.status);
  console.log("Client Cron Response:", await res.json());
}

export async function postClientCron() {
  const res = await fetch("https://subscription.stackguard.io/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "New Client",
      email: "newclient@example.com",
    }),
  });

  console.log("Post Client Cron Status:", res.status);
  console.log("Post Client Cron Response:", await res.json());
}

export async function getClientIDCron() {
  const res = await fetch("https://subscription.stackguard.io/client/1234", {});

  console.log("Post Client Cron Status:", res.status);
  console.log("Post Client Cron Response:", await res.json());
}
export async function PublicKeyCron() {
  const res = await fetch("https://subscription.stackguard.io/public-key", {});
  console.log("Public Key Cron Status:", res.status);
  console.log("Public Key Cron Response:", await res.json());
}

export async function updateClientCron() {
  const res = await fetch("https://subscription.stackguard.io/client/1234", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Updated Client Name",
      email: "updatedclient@example.com",
    }),
  });

  console.log("Update Client Cron Status:", res.status);
  console.log("Update Client Cron Response:", await res.json());
}

export async function ClientStatusCron() {
  const res = await fetch(
    "https://subscription.stackguard.io/client/status",
    {}
  );
  console.log("Client Status Cron Status:", res.status);
  console.log("Client Status Cron Response:", await res.json());
}

export async function ClientValidateCron() {
  const res = await fetch("https://subscription.stackguard.io/validate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clientId: "1234",
      token: "sometokenvalue",
    }),
  });
  console.log("Client Usage Cron Status:", res.status);
  console.log("Client Usage Cron Response:", await res.json());
}

export async function ValidateCountCron() {
  const res = await fetch("https://subscription.stackguard.io/validate/count", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Client Usage Cron Status:", res.status);
  console.log("Client Usage Cron Response:", await res.json());
}

ValidateCountCron();
//ClientValidateCron();

//updateClientCron();
//PublicKeyCron();
// getClientIDCron();
// postClientCron();
// getHealthCron();
